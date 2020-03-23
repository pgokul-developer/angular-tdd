import { Component, OnInit } from '@angular/core';
import { TodoFacade } from '../../facades/todo.facade';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.sass']
})
export class TodoContainerComponent implements OnInit {

  constructor(public todoFacade: TodoFacade) { }

  ngOnInit(): void {
  }

  createTodo($event) {
    this.todoFacade.createTodo($event);
  }

  completeTodo($event) {
    console.log($event);
    this.todoFacade.completeTodo($event);
  }

}
