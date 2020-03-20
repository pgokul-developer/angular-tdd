import { Action, createReducer, on } from '@ngrx/store';
import * as TodoActions from '../actions/todo.actions';
import { Todo } from '../model/todo.model';

export const todoFeatureKey = 'todo';

export interface State {
  todos: Todo[];
  error: any;
}

export const initialState: State = {
  todos: [],
  error: ''
};

const todoReducer = createReducer(
  initialState,

  on(TodoActions.loadTodos, state => state),
  on(TodoActions.loadTodosSuccess, (state, action) => state),
  on(TodoActions.loadTodosFailure, (state, action) => state),
  on(
    TodoActions.createTodoSuccess, (state, { todo }) => ({
      ...state,
      todos: [
        ...state.todos,
        todo
      ]
    })),
  on(
    TodoActions.createTodoFailure, (state, { error }) => ({
      ...state,
      error: error
    })),
);

export function reducer(state: State | undefined, action: Action) {
  return todoReducer(state, action);
}

export const getError = (state: State) => state.error;
