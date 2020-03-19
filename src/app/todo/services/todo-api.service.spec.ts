import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TodoDescription, generateMock, Todo } from './../model/todo.model';
import { TestBed, inject, getTestBed } from '@angular/core/testing';

import { TodoApiService } from './todo-api.service';
import { HttpClient } from '@angular/common/http';

const mockTodo = generateMock();

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
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(TodoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});