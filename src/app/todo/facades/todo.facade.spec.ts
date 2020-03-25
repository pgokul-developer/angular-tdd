import { HttpClient } from '@angular/common/http';
import { TodoApiService } from './../services/todo-api.service';
import { TodoFacade } from './todo.facade';
import { TodoEffects } from './../effects/todo.effects';
import { generateMock, Todo } from './../model/todo.model';
import { TestBed } from '@angular/core/testing';

import { provideMockStore, MockStore } from '@ngrx/store/testing';
import * as fromTodoReducer from '../reducers/todo.reducer';
import * as fromTodoActions from '../actions/todo.actions';

import { hot } from 'jasmine-marbles';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { readFirst } from '@nrwl/angular/testing';
import { Observable, of } from 'rxjs';


export class TodoFacadeMock {
    todo$: Observable<Todo[]> = of(
        [
            generateMock()
        ]
    )

    public createTodo() {
        // this.store.dispatch(TodoActions.createTodo({ description: description }));
    }

    public completeTodo() {
        // this.store.dispatch(TodoActions.completeTodo({ todo }))
    }

    public getTodos(): Observable<Todo[]> {
        return of(
            [
                generateMock()
            ]);
        // return this.store.pipe(
        //     select(fromTodoSelectors.selectTodos));
    }

    public deleteTodo() {
        // this.store.dispatch(TodoActions.deleteTodo({ todo }))

    }
}


describe('TodoFacade', () => {
    let facade: TodoFacade;
    let store;
    let initialState = {
        todos: [
            //   generateMock()
        ],
        error: ''
    };

    beforeEach(() => {

        @NgModule({
            imports: [
                NoopAnimationsModule,
                HttpClientTestingModule,
                StoreModule.forFeature(fromTodoReducer.todoFeatureKey, fromTodoReducer.reducer, { initialState }),
                EffectsModule.forFeature([TodoEffects])
            ],
            providers: [
                TodoFacade,
                TodoApiService,
            ]
        })
        class CustomFeatureModule { }

        @NgModule({
            imports: [
                StoreModule.forRoot(
                    {},
                    {
                        runtimeChecks: {
                            strictStateImmutability: true,
                            strictActionImmutability: true,
                            strictStateSerializability: false,
                            strictActionSerializability: false
                        }
                    }
                ),
                EffectsModule.forRoot([]),
                CustomFeatureModule
            ]
        })
        class RootModule { }


        TestBed.configureTestingModule({
            imports: [RootModule]
        });
        facade = TestBed.inject(TodoFacade);
        store = TestBed.inject(Store);

    });

    it('should be created', () => {
        expect(facade).toBeTruthy();
    });

    it('Then todos$ should return the todos when called', async done => {
        try {

            const expectedTodos: Todo[] = [
                generateMock()
            ];

            const todo: Todo = generateMock();

            expect(facade.todos$).toBeDefined();
            let result = await readFirst(facade.todos$);
            expect(result).toEqual(initialState.todos);

            store.dispatch(fromTodoActions.createTodoSuccess({ todo }));
            result = await readFirst(facade.todos$);
            expect(result).toEqual(expectedTodos);

            done();
        } catch (err) {
            done.fail(err);
        }
    });

    describe('When the todo facade action dispatcher functions are being called', () => {
        beforeEach(() => {
            spyOn(store, 'dispatch');
        });

        describe('When createTodo is called with the description as a parameter', () => {
            const description: string = 'todo1';
            beforeEach(() => {
                facade.createTodo(description);
            });

            it('Then the store should dispatch an createTodo action with the description as a parameter', () => {
                expect(store.dispatch).toHaveBeenCalledWith(fromTodoActions.createTodo({ description }));
            });
        });

        describe('When completeTodo is called with the todo as a parameter', () => {
            const todo: Todo = generateMock();
            beforeEach(() => {
                facade.completeTodo(todo);
            });

            it('Then the store should dispatch an completeTodo action with the todo as a parameter', () => {
                expect(store.dispatch).toHaveBeenCalledWith(fromTodoActions.completeTodo({ todo }));
            });
        });

        describe('When deleteTodo is called with the todo as a parameter', () => {
            const todo: Todo = generateMock();
            beforeEach(() => {
                facade.deleteTodo(todo);
            });

            it('Then the store should dispatch an deleteTodo action with the todo as a parameter', () => {
                expect(store.dispatch).toHaveBeenCalledWith(fromTodoActions.deleteTodo({ todo }));
            });
        });
    });
});
