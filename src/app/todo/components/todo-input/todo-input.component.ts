import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.sass']
})
export class TodoInputComponent implements OnInit {

  @Output() createTodo = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  emitCreateTodo($event) {
    console.log('$event', $event);
    this.createTodo.emit($event.target.value);
    $event.target.value = '';
  }

}
