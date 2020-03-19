
import { TodoDescription, generateMock, Todo } from './../model/todo.model';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class TodoApiService {

  constructor(private httpClient: HttpClient) { }

  public createToDoApi(data: TodoDescription): Observable<Todo> {
    // return this.httpClient.post<Todo>('http://70023.mocklab.io/todo/create', data);
    return of(generateMock());
  }
}
