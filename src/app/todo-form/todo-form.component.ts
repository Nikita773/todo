import {Component} from '@angular/core';
import {ITodoItem} from "../todo-model/todo.model";
import {TodosService} from "../services/todos.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  title = new FormControl('', Validators.required);

  constructor(private todosService: TodosService) {}

  addTodo(): void {
    const todo: ITodoItem = {
      id: this.todosService.getTodoId(),
      description: this.title.value,
      completed: false,
      date: Date.now()
    }

    if (this.title.value.trim()) {
      this.todosService.addTodo(todo);
    } else { return; }
    this.title.setValue('');
  }
}
