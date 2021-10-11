import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {todoCreate, todoDelete, todoToggle,} from "./modules/todo/store/todo.actions";
import {TodoState} from "./modules/todo/store/todo.reducer";
import {todoListSelector} from "./modules/todo/store/todo.selectors";
import {TodosService} from "./modules/todo/services/todos.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Todo-app';
  todoList$ = this.store$.pipe(select(todoListSelector));

  constructor(
    private store$: Store<TodoState>,
    private todosService: TodosService
  ) {}

  ngOnInit(): void {
    this.todosService.init();
  }

  addTodo(description: string): void {
    this.store$.dispatch(todoCreate({ description }))
  }

  removeTodo(id: number): void {
    this.store$.dispatch(todoDelete({ id }))
  }

  onToggle(id: number): void {
    this.store$.dispatch(todoToggle({ id }))
  }
}
