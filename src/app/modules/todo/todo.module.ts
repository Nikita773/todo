import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {TODO_REDUCER_NODE, todoReducer} from "./store/todo.reducer";
import {EffectsModule} from "@ngrx/effects";
import {TodoEffect} from "./store/todo.effect";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
    EffectsModule.forRoot([TodoEffect])
  ]
})
export class TodoModule { }
