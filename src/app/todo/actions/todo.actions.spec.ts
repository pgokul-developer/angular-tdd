import { generateMock, Todo } from './../model/todo.model';
import { TodoActions } from '../actions';

describe('loadTodos', () => {
    it('should return an action', () => {
        expect(TodoActions.loadTodos().type).toBe('[Todo] Load Todos');
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
    const todo: Todo = generateMock();
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