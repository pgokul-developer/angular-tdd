import { generateMock } from './../../model/todo.model';
import { MaterialModule } from './../../../app.module';
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { TodoListItemComponent } from './todo-list-item.component';
import { By } from '@angular/platform-browser';

describe('TodoListItemComponent', () => {
  let component: TodoListItemComponent;
  let fixture: ComponentFixture<TodoListItemComponent>;
  let container;
  let description;
  let completed;
  let completeIcon;
  let remove;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [TodoListItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListItemComponent);
    component = fixture.componentInstance;
    component.todo = generateMock();
    fixture.detectChanges();
    container = fixture.debugElement.query(By.css('.todo-list-item'));
    completed = fixture.debugElement.query(By.css('.complete'));
    description = fixture.debugElement.query(By.css('.description'));
    remove = fixture.debugElement.query(By.css('.remove'));
    completeIcon = completed.query(By.css('.material-icons'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a container', () => {
    expect(fixture.debugElement.query(By.css('.todo-list-item'))).toBeTruthy();
  });

  describe('completed button', () => {
    it('should exist', () => {
      expect(completed).toBeTruthy();
    });

    it('should have an icon', () => {

      expect(completeIcon).toBeTruthy();
    });

    it('should have the completed class if completed is true', () => {
      component.todo.completed = true;

      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css('.completed'))).toBeTruthy();
    });

    it('should emit completeTodo when clicked', fakeAsync(() => {
      spyOn(component, 'emitCompleteTodo');
      // component.id = 1;

      completed.triggerEventHandler('click', {})

      tick();
      fixture.detectChanges();
      expect(component.emitCompleteTodo).toHaveBeenCalled();
      // expect(component.complete.emit).toHaveBeenCalledWith(component.id);
      // expect(component.emitCreateTodo).toHaveBeenCalledWith(event);
    }));

  });

  describe('description', () => {
    it('should exist', () => {
      expect(description).toBeTruthy();
    });

    it('should display the description on the UI', () => {
      component.todo.description = 'Todo 1';

      fixture.detectChanges();

      expect(description.nativeElement.textContent).toBe(component.todo.description);
    });
  });

  describe('remove button', () => {
    it('should exist', () => {
      expect(remove).toBeTruthy();
    });

    it('should have an icon', () => {
      let icon = remove.query(By.css('.material-icons'));
      expect(icon).toBeTruthy();
    });

    it('should emit deleteTodo when clicked', fakeAsync(() => {
      spyOn(component, 'emitDeleteTodo');
      // component.id = 1;

      remove.triggerEventHandler('click', {})

      tick();
      fixture.detectChanges();
      expect(component.emitDeleteTodo).toHaveBeenCalled();
      // expect(component.complete.emit).toHaveBeenCalledWith(component.id);
      // expect(component.emitCreateTodo).toHaveBeenCalledWith(event);
    }));

  });
});
