import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TodoDescription, generateMock, Todo } from './../model/todo.model';
import { TestBed, inject, getTestBed } from '@angular/core/testing';

import { TodoApiService } from './todo-api.service';
import { HttpClient } from '@angular/common/http';

const mockDescription: string = 'todo 1'

const mockTodo = {
  description: mockDescription,
  id: 1,
  completed: false
};

describe('TodoApiService', () => {
  let injector: TestBed;
  let service: TodoApiService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TodoApiService
      ]

    });
    injector = getTestBed();
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(TodoApiService);
  });

  afterEach(() => {

    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an observable with created data', () => {
    const todoDescription: TodoDescription = { description: mockDescription };
    service.createTodoApi(todoDescription).subscribe(res => {
      expect(res).toEqual(mockTodo);
    });

    // const req = httpMock.expectOne('http://70023.mocklab.io/todo/create', 'call to api');
    // expect(req.request.method).toBe('POST');
    // req.flush(mockTodo);
  });
});
