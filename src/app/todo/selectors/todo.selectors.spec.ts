import * as fromTodoReducer from '../reducers/todo.reducer';
import * as fromTodoSelectors from './todo.selectors';

const initialState = {
    todos: [
        {
            description: 'todo 1',
            id: 1,
            completed: false
        }
    ],
    error: 'error'
};

describe('Todo Selectors', () => {
    const state = {
        [fromTodoReducer.todoFeatureKey]: {
            todos: [
                {
                    description: 'todo 1',
                    id: 1,
                    completed: false
                }
            ],
            error: 'error'
        }
    }

    it('should select the feature state', () => {
        const result = fromTodoSelectors.selectTodoState(state);
        expect(result).toEqual(initialState);
    });

    it('should select the error state', () => {
        const selector = fromTodoSelectors.selectTodosError(state);
        expect(selector).toBe('error');
    });

    it('should select the todos state', () => {
        const selector = fromTodoSelectors.selectTodos(state);
        expect(selector.length).toBe(1);
        expect(selector[0].id).toBe(1);
    });
});