
import { TodoDescription, generateMock, Todo } from './../model/todo.model';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoApiService {

  id: number = 0;

  constructor(private httpClient: HttpClient) { }

  private generateTodo(data: TodoDescription) {
    return {
      description: data.description,
      id: ++this.id,
      completed: false
    }
  }

  public createToDoApi(data: TodoDescription): Observable<Todo> {
    // return this.httpClient.post<Todo>('http://70023.mocklab.io/todo/create', data);
    return of(this.generateTodo(data));
  }
}
