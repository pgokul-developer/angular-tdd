import { generateMock, Todo } from './../model/todo.model';
import { TodoActions } from '../actions';

describe('loadTodos', () => {
    it('should return an action', () => {
        expect(TodoActions.loadTodos().type).toBe('[Todo] Load Todos');
    });
});

describe('resetError', () => {
    it('should return an action', () => {
        expect(TodoActions.resetError().type).toBe('[Todo] Reset Error');
    });
});

describe('createTodo', () => {
    const description: string = 'Todo1';
    it('should return an action', () => {
        expect(TodoActions.createTodo({ description }).type).toBe('[Todo] Create Todo');
    });

    it('should be called with the correct payload', () => {
        expect(TodoActions.createTodo({ description })).toEqual(
            {
                type: '[Todo] Create Todo',
                description
            }
        );
    });
});

describe('createTodoSuccess', () => {
    const todo: Todo = generateMock();
    it('should return an action', () => {
        expect(TodoActions.createTodoSuccess({ todo }).type).toBe('[Todo] Create Todo Success');
    });

    it('should be called with the correct payload', () => {
        expect(TodoActions.createTodoSuccess({ todo })).toEqual(
            {
                type: '[Todo] Create Todo Success',
                todo
            }
        );
    });
});

describe('createTodoFailure', () => {
    const error = 'Error';
    it('should return an action', () => {
        expect(TodoActions.createTodoFailure({ error }).type).toBe('[Todo] Create Todo Failure');
    });

    it('should be called with the correct payload', () => {
        expect(TodoActions.createTodoFailure({ error })).toEqual(
            {
                type: '[Todo] Create Todo Failure',
                error
            }
        );
    });
});

describe('completeTodo', () => {
    const todo: Todo = generateMock();
    it('should return an action', () => {
        expect(TodoActions.completeTodo({ todo }).type).toBe('[Todo] Complete Todo');
    });

    it('should be called with the correct payload', () => {
        expect(TodoActions.completeTodo({ todo })).toEqual(
            {
                type: '[Todo] Complete Todo',
                todo
            }
        );
    });
});

describe('completeTodoSuccess', () => {
    const todo: Todo = generateMock();
    it('should return an action', () => {
        expect(TodoActions.completeTodoSuccess({ todo }).type).toBe('[Todo] Complete Todo Success');
    });

    it('should be called with the correct payload', () => {
        expect(TodoActions.completeTodoSuccess({ todo })).toEqual(
            {
                type: '[Todo] Complete Todo Success',
                todo
            }
        );
    });
});

describe('completeTodoFailure', () => {
    const error = 'Error';
    it('should return an action', () => {
        expect(TodoActions.completeTodoFailure({ error }).type).toBe('[Todo] Complete Todo Failure');
    });

    it('should be called with the correct payload', () => {
        expect(TodoActions.completeTodoFailure({ error })).toEqual(
            {
                type: '[Todo] Complete Todo Failure',
                error
            }
        );
    });
});

describe('deleteTodo', () => {
    const todo: Todo = generateMock();
    it('should return an action', () => {
        expect(TodoActions.deleteTodo({ todo }).type).toBe('[Todo] Delete Todo');
    });

    it('should be called with the correct payload', () => {
        expect(TodoActions.deleteTodo({ todo })).toEqual(
            {
                type: '[Todo] Delete Todo',
                todo
            }
        );
    });
});

describe('deleteTodoSuccess', () => {
    const todo: Todo = generateMock();
    it('should return an action', () => {
        expect(TodoActions.deleteTodoSuccess({ todo }).type).toBe('[Todo] Delete Todo Success');
    });

    it('should be called with the correct payload', () => {
        expect(TodoActions.deleteTodoSuccess({ todo })).toEqual(
            {
                type: '[Todo] Delete Todo Success',
                todo
            }
        );
    });
});

describe('deleteTodoFailure', () => {
    const error = 'Error';
    it('should return an action', () => {
        expect(TodoActions.deleteTodoFailure({ error }).type).toBe('[Todo] Delete Todo Failure');
    });

    it('should be called with the correct payload', () => {
        expect(TodoActions.deleteTodoFailure({ error })).toEqual(
            {
                type: '[Todo] Delete Todo Failure',
                error
            }
        );
    });
});