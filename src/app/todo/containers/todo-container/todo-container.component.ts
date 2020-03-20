import { Component, OnInit } from '@angular/core';
import { TodoFacade } from '../../services/todo.facade';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.sass']
})
export class TodoContainerComponent implements OnInit {

  constructor(public todoService: TodoFacade) { }

  ngOnInit(): void {
  }

  createTodo($event) {
    console.log($event);
    this.todoService.createTodo($event);
  }

}
