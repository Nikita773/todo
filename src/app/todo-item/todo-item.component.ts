import {Component, Input, OnInit} from '@angular/core';
import {ITodoItem} from "../todo-model/todo.model";
import {TodosService} from "../services/todos.service";
import {FormControl} from "@angular/forms";
import {BehaviorSubject, from, Observable, ObservedValueOf, of} from "rxjs";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  todos$ = this.todosService.todos$;
  searchString = new FormControl('');
  sortByParams = new FormControl('description');
  sortDirection:'asc' | 'desc' = 'asc';

  constructor(private todosService: TodosService) { }

  ngOnInit() {

  }

  // getTodos(): ITodoItem[] {
  //   return this.todos = this.todosService.todos;
  // }

  removeTodo(id: number): void {
    this.todosService.removeTodo(id);
  }

  onSortDirection(): void {
    if (this.sortDirection === 'desc') {
      this.sortDirection = 'asc';
    } else {
      this.sortDirection = 'desc';
    }
  }

  onChange(item: ITodoItem) {
    item.completed = !item.completed;
    this.todosService.setLocalStorage();
  }
}
