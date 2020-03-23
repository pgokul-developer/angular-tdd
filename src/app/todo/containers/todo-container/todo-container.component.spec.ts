import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoInputComponent } from './../../components/todo-input/todo-input.component';
import { TodoFacade } from '../../facades/todo.facade';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoContainerComponent } from './todo-container.component';
import { MaterialModule } from 'src/app/app.module';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('TodoContainerComponent', () => {
  let component: TodoContainerComponent;
  let fixture: ComponentFixture<TodoContainerComponent>;
  let mockTodoFacade: TodoFacade;
  let todoInput: DebugElement;
  let todoList;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, BrowserAnimationsModule, FormsModule],
      declarations: [TodoContainerComponent, TodoInputComponent],
      providers: [{
        provide: TodoFacade,
        useValue: jasmine.createSpyObj('TodoFacade', ['createTodo', 'completeTodo', 'getTodos'])
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

  it('todoInput sbould emit createTodo event', () => {
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
    let facade = todoInput.injector.get(TodoFacade);

    component.completeTodo(description);
    fixture.detectChanges();
    expect(facade.completeTodo).toHaveBeenCalled();
  });

  it('should call getTodos on init', () => {
    let facade = todoInput.injector.get(TodoFacade);
    component.ngOnInit();
    fixture.detectChanges();
    expect(facade.getTodos).toHaveBeenCalled();
  });
});
