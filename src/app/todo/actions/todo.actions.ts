import { createAction, props } from '@ngrx/store';
import { Todo } from '../model/todo.model';

export const loadTodos = createAction(
  '[Todo] Load Todos'
);

export const loadTodosSuccess = createAction(
  '[Todo] Load Todos Success',
  props<{ data: any }>()
);

export const loadTodosFailure = createAction(
  '[Todo] Load Todos Failure',
  props<{ error: any }>()
);

export const createTodo = createAction(
  '[Todo] Create Todo',
  props<{ description: string }>()
);

export const createTodoSuccess = createAction(
  '[Todo] Create Todo Success',
  props<{ todo: Todo }>()
);

export const createTodoFailure = createAction(
  '[Todo] Create Todo Failure',
  props<{ error: any }>()
);