import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../model/todo.model';


@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.sass']
})
export class TodoListItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() complete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public emitCompleteTodo() {
    this.complete.emit(this.todo);
  }

}
