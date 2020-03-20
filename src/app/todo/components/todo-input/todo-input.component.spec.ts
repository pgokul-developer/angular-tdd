import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './../../../app.module';
import { element } from 'protractor';
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { TodoInputComponent } from './todo-input.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('TodoInputComponent', () => {
  let component: TodoInputComponent;
  let fixture: ComponentFixture<TodoInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, BrowserAnimationsModule],
      declarations: [TodoInputComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('input field', () => {
    let input;
    let inputElement;
    beforeEach(() => {
      input = fixture.debugElement.query(By.css('input'));
      inputElement = input.nativeElement;
    });

    it('should exist', () => {
      expect(input).toBeTruthy();
      expect(inputElement).toBeTruthy();
    });

    it('should call emitTodoCreate on enter pressed', fakeAsync(
      () => {
        spyOn(component, 'emitCreateTodo');

        inputElement.value = 'hello';
        const event = new KeyboardEvent("keypress", {
          "key": "Enter"
        });

        input.triggerEventHandler('keyup.enter', event)

        tick();
        fixture.detectChanges();
        expect(component.emitCreateTodo).toHaveBeenCalled();
        expect(component.emitCreateTodo).toHaveBeenCalledWith(event);
      })
    );
  });
});
