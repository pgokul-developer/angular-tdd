import { TodoApiService } from './../services/todo-api.service';
import { generateMock, Todo, TodoDescription } from './../model/todo.model';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as TodoActions from '../actions/todo.actions';



@Injectable()
export class TodoEffects {

  mockTodo = generateMock();

  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(TodoActions.loadTodos),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => TodoActions.loadTodosSuccess({ data })),
          catchError(error => of(TodoActions.loadTodosFailure({ error }))))
      )
    );
  });



  createTodo$ = createEffect(() => () => {
    return this.actions$.pipe(

      ofType(TodoActions.createTodo),
      switchMap((desciption: TodoDescription) => {
        return this.todoApi.createToDoApi(desciption).pipe(
          map((todo: Todo) => TodoActions.createTodoSuccess({ todo })),
          catchError(error => of(TodoActions.createTodoFailure({ error })))
        )
      })
    );
  });



  constructor(private actions$: Actions,
    private todoApi: TodoApiService) { }

}
