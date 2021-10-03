import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ITodoItem} from "../todo-model/todo.model";
import {TodosService} from "../modules/todo/services/todos.service";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todos: ITodoItem[];
  @Output() toggle = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();
  searchString = '';
  sortByParams = 'description';
  sortDirection = 'asc';

  onSortDirection(): void {
    if (this.sortDirection === 'desc') {
      this.sortDirection = 'asc';
    } else {
      this.sortDirection = 'desc';
    }
  }

  onToggle(id: number): void {
    this.toggle.emit(id);
  }

  removeTodo(id: number): void {
    this.delete.emit(id);
  }
}
