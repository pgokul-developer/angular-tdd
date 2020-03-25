import { TodoFacadeMock } from './../../facades/todo.facade.spec';
import { TodoListItemComponent } from './../../components/todo-list-item/todo-list-item.component';
import { generateMock, Todo } from './../../model/todo.model';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoInputComponent } from './../../components/todo-input/todo-input.component';
import { TodoFacade } from '../../facades/todo.facade';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoContainerComponent } from './todo-container.component';
import { MaterialModule } from 'src/app/app.module';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs';
import { ETXTBSY } from 'constants';

describe('TodoContainerComponent', () => {
  let component: TodoContainerComponent;
  let fixture: ComponentFixture<TodoContainerComponent>;
  let mockTodoFacade: TodoFacade;
  let todoInput: DebugElement;
  let todoList;
  let facade;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, BrowserAnimationsModule, FormsModule],
      declarations: [TodoContainerComponent, TodoInputComponent, TodoListItemComponent],
      providers: [{
        provide: TodoFacade,
        useClass: TodoFacadeMock
      }]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    mockTodoFacade = TestBed.inject(TodoFacade);
    fixture = TestBed.createComponent(TodoContainerComponent);
    component = fixture.componentInstance;
    todoInput = fixture.debugElement.query(By.directive(TodoInputComponent));
    todoList = fixture.debugElement.query(By.css('.todo-list'));
    facade = TestBed.inject(TodoFacade);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an instance of todo-input component', () => {
    expect(todoInput).toBeTruthy();
  });

  it('should have an todo-list container', () => {
    expect(todoList).toBeTruthy();
  });

  it('todoInput should emit createTodo event', () => {
    // spyOn(component, 'createTodo');
    const expectedDescription: string = 'todo 1';
    let todoInputComponent: TodoInputComponent = new TodoInputComponent();
    todoInputComponent.createTodo.subscribe((description: string) => {
      expect(description).toBe(expectedDescription);
    });
    todoInputComponent.emitCreateTodo(expectedDescription);

    // expect(component.createTodo).toHaveBeenCalled();
  });

  it('should call createTodo when', () => {
    spyOn(component, 'createTodo');
    const description: string = 'todo 1';
    let todoInputComponent: TodoInputComponent = todoInput.componentInstance;
    todoInputComponent.emitCreateTodo(description);
    fixture.detectChanges();
    expect(component.createTodo).toHaveBeenCalled();
  });

  it('todoInput sbould emit createTodo event', () => {
    const expectedDescription: string = 'todo 1';
    let todoInputComponent: TodoInputComponent = new TodoInputComponent();
    todoInputComponent.createTodo.subscribe((description: string) => {
      expect(description).toBe(expectedDescription);
    });
    todoInputComponent.emitCreateTodo(expectedDescription);
    ;
  });

  it('should call completeTodo service', () => {
    const description: string = 'todo 1';
    // spyOn(component, 'completeTodo');
    spyOn(facade, 'completeTodo');
    component.completeTodo(description);
    fixture.detectChanges();
    expect(facade.completeTodo).toHaveBeenCalled();
  });

  it('should call getTodos on init', () => {
    // spyOn(component, 'ngOnInit');
    spyOn(facade, 'getTodos');
    component.ngOnInit();
    fixture.detectChanges();
    expect(facade.getTodos).toHaveBeenCalled();
  });

  describe('todoListItem delete functionality', () => {
    let todoListItem;
    let todo: Todo = generateMock();
    beforeEach(() => {
      todoListItem = fixture.debugElement.query(By.directive(TodoListItemComponent));
      // console.log('todoListItem', todoListItem);
      fixture.detectChanges();
    });

    it('should exist', () => {
      expect(todoListItem).toBeTruthy();
    });

    it('should emit a delete event that calls the deleteTodo method', () => {
      let todoListItemComponent: TodoListItemComponent = todoListItem.componentInstance;

      spyOn(component, 'deleteTodo');

      todoListItemComponent.emitDeleteTodo();
      fixture.detectChanges();

      expect(component.deleteTodo).toHaveBeenCalled();
    });

    it('deleteTodo method on container componenet should call facade deleteTodo method', () => {
      spyOn(facade, 'deleteTodo');
      component.deleteTodo(todo);
      fixture.detectChanges();
      expect(facade.deleteTodo).toHaveBeenCalled();
    });

  });
});
