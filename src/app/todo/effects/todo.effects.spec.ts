import { TodoApiService } from './../services/todo-api.service';
import { generateMock, Todo } from './../model/todo.model';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { TodoEffects } from './todo.effects';
import { TodoActions } from '../actions';
import { Actions } from '@ngrx/effects';
import { hot, cold } from 'jasmine-marbles';

export class TodoApiServiceStub {
    createTodoApi(): Observable<any> {
        return of(generateMock());
    }

    completeTodoApi(): Observable<any> {
        let todo: Todo = generateMock();
        todo.completed = true;
        return of(todo);
    }
}


describe('TodoEffects', () => {
    let actions$: Observable<any>;
    let effects: TodoEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                TodoEffects,
                provideMockActions(() => actions$),
                {
                    provide: TodoApiService,
                    useClass: TodoApiServiceStub
                }
            ]
        });

        effects = TestBed.get<TodoEffects>(TodoEffects);
        actions$ = TestBed.inject(Actions);

    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });

    describe('createTodo effect', () => {

        it('should call createTodoSuccess when successful', () => {
            const todo = generateMock();
            const action = TodoActions.createTodo({ description: todo.description });
            const completion = TodoActions.createTodoSuccess({ todo });

            actions$ = cold('-a-|', { a: action });
            const expected = cold('-a-|', { a: completion });

            expect(effects.createTodo$()).toBeObservable(expected);

        });
    });

    describe('completeTodo effect', () => {

        it('should call completeTodoSuccess when successful', () => {
            const todo: Todo = generateMock();
            let updateTodo: Todo = generateMock();
            updateTodo.completed = true;
            const action = TodoActions.completeTodo({ todo });
            const completion = TodoActions.completeTodoSuccess({ todo: updateTodo });

            actions$ = cold('-a-|', { a: action });
            const expected = cold('-a-|', { a: completion });

            expect(effects.completeTodo$()).toBeObservable(expected);

        });

        // it('should call completeTodoFailure when successful', () => {
        //     const error: string = 'Error'
        //     const updateTodo: Todo = generateMock();
        //     updateTodo.completed = true;
        //     const action = TodoActions.completeTodo({ todo });
        //     const completion = TodoActions.completeTodoFailure({ error });

        //     actions$ = cold('-a-|', { a: action });
        //     // const response = cold('-a|', { a: todo })
        //     const expected = cold('-#', { a: completion });

        //     expect(effects.completeTodo$()).toBeObservable(expected);

        // });

    });
});
