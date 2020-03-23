import { FormsModule } from '@angular/forms';
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
      imports: [MaterialModule, BrowserAnimationsModule, FormsModule],
      declarations: [TodoInputComponent],
      // providers: [
      //   {
      //     provide: 
      //   }
      // ]
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
        spyOn(component, 'onKeyEnterCreateTodo');

        inputElement.value = 'hello';
        const event = new KeyboardEvent("keypresss", {
          "key": "Enter"
        });

        input.triggerEventHandler('keydown.enter', event)

        tick();
        fixture.detectChanges();
        expect(component.onKeyEnterCreateTodo).toHaveBeenCalled();
        expect(component.onKeyEnterCreateTodo).toHaveBeenCalledWith(event);
      })
    );
  });
});
