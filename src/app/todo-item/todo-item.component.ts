import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ITodoItem} from "../todo-model/todo.model";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todos: ITodoItem[];
  @Output() toggle = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();
  searchString = new FormControl('', Validators.required);
  sortByParams = new FormControl('description', Validators.required);
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
