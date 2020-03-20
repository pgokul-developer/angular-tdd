// import { generateMock } from './../model/todo.model';
// import { TestBed } from '@angular/core/testing';

// import { TodoService } from './todo.service';
// import { provideMockStore, MockStore } from '@ngrx/store/testing';
// import * as fromTodoReducer from '../reducers/todo.reducer';
// import { hot } from 'jasmine-marbles';

// describe('TodoService', () => {
//   let service: TodoService;
//   let store: MockStore;
//   let initialState = {
//     todos: [
//       generateMock()
//     ],
//     error: ''
//   };

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         TodoService,
//         provideMockStore({ initialState }),
//       ]
//     });
//     store = TestBed.inject(MockStore);
//     service = TestBed.inject(TodoService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });

//   it('should have one todo', () => {
//     expect(service.todos).toBeObservable(
//       hot('a-', { a: generateMock() })
//     )
//   });
// });
