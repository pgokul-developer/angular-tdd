import { TodoInputComponent } from './../../components/todo-input/todo-input.component';
import { TodoFacade } from './../../services/todo.facade';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoContainerComponent } from './todo-container.component';

describe('TodoContainerComponent', () => {
  let component: TodoContainerComponent;
  let fixture: ComponentFixture<TodoContainerComponent>;
  let mockTodoFacade: TodoFacade;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoContainerComponent, TodoInputComponent],
      providers: [{
        provide: TodoFacade,
        useValue: jasmine.createSpyObj('TodoFacade', ['createTodo'])
      }]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    mockTodoFacade = TestBed.inject(TodoFacade);
    fixture = TestBed.createComponent(TodoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
