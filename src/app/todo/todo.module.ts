import { MaterialModule } from './../app.module';
import { TodoFacade } from './facades/todo.facade';
import { ToDoRoutingModule } from './todo-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromTodo from './reducers/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './effects/todo.effects';
import { TodoApiService } from './services/todo-api.service';
import { HttpClientModule } from '@angular/common/http';
import { TodoContainerComponent } from './containers/todo-container/todo-container.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';


@NgModule({
  declarations: [TodoContainerComponent, TodoInputComponent, TodoListItemComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromTodo.todoFeatureKey, fromTodo.reducer),
    EffectsModule.forFeature([TodoEffects]),
    HttpClientModule,
    ToDoRoutingModule,
    MaterialModule
  ],
  providers: [TodoApiService, TodoFacade]
})
export class TodoModule { }
