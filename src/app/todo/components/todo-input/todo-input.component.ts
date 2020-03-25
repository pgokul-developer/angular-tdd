import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.sass']
})
export class TodoInputComponent implements OnInit {
  newTodo: string = ''

  @Output() createTodo = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  onKeyEnterCreateTodo($event) {
    console.log('$event', $event);
    this.emitCreateTodo($event.target.value);
    $event.target.value = '';
  }

  emitCreateTodo(description: string) {
    this.createTodo.emit(description);
    this.newTodo = '';
  }

}
