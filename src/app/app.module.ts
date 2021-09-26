import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TodosFilterPipe} from "./pipes/todos-filter.pipe";
import { TodosSortPipe } from './pipes/todos-sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoItemComponent,
    TodosFilterPipe,
    TodosSortPipe,
    TodosSortPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
