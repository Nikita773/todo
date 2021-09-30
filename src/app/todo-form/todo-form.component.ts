import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {ITodoItem} from "../todo-model/todo.model";
import {TodosService} from "../services/todos.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  title = '';
  todoGroup: FormGroup;

  constructor(
    private todosService: TodosService,
  ) {}

  ngOnInit(): void {
    this.todoGroup = new FormGroup({
      name: new FormControl('', Validators.required)
    })
  }

  addTodo(): void {
    const todo: ITodoItem = {
      id: this.todosService.getTodoId(),
      description: this.title,
      completed: false,
      date: Date.now()
    }

    if (this.title.trim()) {
      this.todosService.addTodo(todo);
    } else { return; }
    this.title = '';
  }

  get todoName() {
    return this.todoGroup.controls;
  }
}
