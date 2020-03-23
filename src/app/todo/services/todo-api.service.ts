
import { TodoDescription, generateMock, Todo } from './../model/todo.model';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoApiService {
  API: string = 'http://70023.mocklab.io'

  id: number = 0;

  constructor(private httpClient: HttpClient) { }

  private generateTodo(data: TodoDescription) {
    return {
      description: data.description,
      id: ++this.id,
      completed: false
    }
  }

  public createTodoApi(data: TodoDescription): Observable<Todo> {
    // return this.httpClient.post<Todo>(`${this.API}/todo/create`, data);
    // let todos: Todo =  JSON.parse(localStorage.getItem('todos')) as Todo;
    return of(this.generateTodo(data));
  }

  public completeTodoApi(todo: Todo): Observable<Todo> {
    let newTodo = Object.assign({}, todo);
    newTodo.completed = true;
    return of(newTodo);
  }
}
