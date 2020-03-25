import { generateMock, Todo } from './../model/todo.model';
import { reducer, initialState, State } from './todo.reducer';
import { TodoActions } from '../actions';

describe('Todo Reducer', () => {

  describe('When the resetError is dispatched', () => {
    let state: State;
    const updateState: State = {
      todos: [
        {
          description: 'todo 1',
          id: 1,
          completed: false
        }
      ],
      error: 'Error'
    }

    beforeEach(() => {
      state = reducer(
        updateState,
        TodoActions.resetError()
      );
    });

    it('then error to be empty', () => {
      expect(state.error).toBe('');
    });
  });

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

  describe('When the completeTodoSuccess is dispatched', () => {
    let state: State;
    const updateState: State = {
      todos: [
        {
          description: 'todo 1',
          id: 1,
          completed: false
        }
      ],
      error: ''
    }

    beforeEach(() => {
      let todo: Todo = generateMock();
      todo.completed = true;
      state = reducer(
        updateState,
        TodoActions.completeTodoSuccess({ todo })
      );
    });

    it('then it\'s Todo is set to completed = true', () => {
      expect(state.todos[0].completed).toBeTrue();
    });
  });

  describe('When the completeTodoFailuer is dispatched', () => {
    let state: State;
    const error: string = 'Error';

    beforeEach(() => {
      state = reducer(
        initialState,
        TodoActions.completeTodoFailure({ error })
      );
    });

    it('then error to be set', () => {
      expect(state.error).toBe(error);
    });
  });

  describe('When the deleteTodoSuccess is dispatched', () => {
    let state: State;
    const mockTodo = {
      description: 'todo 1',
      id: 1,
      completed: false
    };
    const initialState: State = {
      todos: [
        mockTodo
      ],
      error: ''
    };

    beforeEach(() => {
      state = reducer(
        initialState,
        TodoActions.deleteTodoSuccess({ todo: mockTodo })
      );
    });

    it('the todo is removed from the todos array', () => {
      expect(state.todos.length).toEqual(0);
    });
  });

  describe('When the deleteTodoFailure is dispatched', () => {
    let state: State;
    const mockTodo = {
      description: 'todo 1',
      id: 1,
      completed: false
    };
    const initialState: State = {
      todos: [
        mockTodo
      ],
      error: ''
    };
    const error: string = 'Error';

    beforeEach(() => {
      state = reducer(
        initialState,
        TodoActions.deleteTodoFailure({ error })
      );
    });

    it('the todo is removed from the todos array', () => {
      expect(state.error).toEqual(error);
    });
  });


  describe('When the undoCompleteTodoSuccess is dispatched', () => {
    let state: State;
    const updateState: State = {
      todos: [
        {
          description: 'todo 1',
          id: 1,
          completed: true
        }
      ],
      error: ''
    }

    beforeEach(() => {
      let todo: Todo = generateMock();
      todo.completed = false;
      state = reducer(
        updateState,
        TodoActions.undoCompleteTodo({ todo })
      );
    });

    it('then it\'s Todo is set to completed = true', () => {
      expect(state.todos[0].completed).toBeTrue();
    });
  });

});
