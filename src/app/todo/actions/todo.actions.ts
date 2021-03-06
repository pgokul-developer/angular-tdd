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

export const resetError = createAction(
  '[Todo] Reset Error',
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

export const completeTodo = createAction(
  '[Todo] Complete Todo',
  props<{ todo: Todo }>()
);

export const completeTodoSuccess = createAction(
  '[Todo] Complete Todo Success',
  props<{ todo: Todo }>()
);

export const completeTodoFailure = createAction(
  '[Todo] Complete Todo Failure',
  props<{ error: string }>()
);

export const undoCompleteTodo = createAction(
  '[Todo] Undo Complete Todo',
  props<{ todo: Todo }>()
);

export const undoCompleteTodoSuccess = createAction(
  '[Todo] Undo Complete Todo Success',
  props<{ todo: Todo }>()
);

export const undoCompleteTodoFailure = createAction(
  '[Todo] Undo Complete Todo Failure',
  props<{ error: string }>()
);

export const deleteTodo = createAction(
  '[Todo] Delete Todo',
  props<{ todo: Todo }>()
);

export const deleteTodoSuccess = createAction(
  '[Todo] Delete Todo Success',
  props<{ todo: Todo }>()
);

export const deleteTodoFailure = createAction(
  '[Todo] Delete Todo Failure',
  props<{ error: string }>()
);