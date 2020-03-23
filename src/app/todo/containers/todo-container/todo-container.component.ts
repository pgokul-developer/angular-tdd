import { Component, OnInit } from '@angular/core';
import { TodoFacade } from '../../facades/todo.facade';
import { Observable } from 'rxjs';
import { Todo } from '../../model/todo.model';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.sass']
})
export class TodoContainerComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(public todoFacade: TodoFacade) { }

  ngOnInit(): void {
    this.getTodos();
  }


  createTodo($event) {
    this.todoFacade.createTodo($event);
  }

  completeTodo($event) {
    console.log($event);
    this.todoFacade.completeTodo($event);
  }

  getTodos() {
    this.todos$ = this.todoFacade.getTodos();
  }

}
