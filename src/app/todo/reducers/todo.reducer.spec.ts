import { generateMock, Todo } from './../model/todo.model';
import { reducer, initialState } from './todo.reducer';
import { TodoActions } from '../actions';

describe('Todo Reducer', () => {
  describe('createToDoSuccess', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
      expect(result.todos.length).toBe(0);
    });

    it('should add a new item to the todos', () => {
      const todo: Todo = generateMock() as Todo;
      const action = TodoActions.createTodoSuccess;
      const createAction = action({ todo });

      const result = reducer(initialState, createAction);

      expect(result.todos.length).toBe(1);
    });

  });

  describe('createTodo failure', () => {

    it('it should store an error', () => {
      const action = TodoActions.createTodoFailure;
      const error = 'Error';
      const createAction = action({ error });

      const result = reducer(initialState, createAction);

      expect(result.error).toEqual('Error');
    });
  });
});
