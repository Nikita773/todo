import {Component, Input} from '@angular/core';
import {ITodoItem} from "../todo-model/todo.model";
import {TodosService} from "../services/todos.service";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todos: ITodoItem[];
  searchString = '';
  sortByParams = 'description';
  sortDirection = 'asc';

  constructor(public todosService: TodosService) { }

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
}
