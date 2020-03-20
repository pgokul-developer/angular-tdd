import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.sass']
})
export class TodoListItemComponent implements OnInit {

  @Input() description: string;
  @Input() completed: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
