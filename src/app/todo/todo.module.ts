import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromTodo from './reducers/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './effects/todo.effects';
import { TodoApiService } from './services/todo-api.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromTodo.todoFeatureKey, fromTodo.reducer),
    EffectsModule.forFeature([TodoEffects]),
    HttpClientModule
  ],
  providers: [TodoApiService]
})
export class TodoModule { }
