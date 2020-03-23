import { selectTodos } from '../selectors/todo.selectors';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromTodoReducer from '../reducers/todo.reducer';
import * as fromTodoSelectors from '../selectors/todo.selectors';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo.model';
import * as TodoActions from '../actions/todo.actions'

@Injectable()
export class TodoFacade {
  todos$: Observable<Todo[]>;

  constructor(private store: Store<fromTodoReducer.State>) {
    this.todos$ = this.store.pipe(
      select(fromTodoSelectors.selectTodos));
  }

  public createTodo(description: string) {
    this.store.dispatch(TodoActions.createTodo({ description: description }));
  }

  public completeTodo(todo: Todo) {
    this.store.dispatch(TodoActions.completeTodo({ todo }))
  }

}
