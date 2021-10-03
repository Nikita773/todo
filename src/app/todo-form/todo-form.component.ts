import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @Output() create = new EventEmitter<string>();
  description = '';
  todoGroup: FormGroup;

  ngOnInit(): void {
    this.todoGroup = new FormGroup({
      name: new FormControl('', Validators.required)
    })
  }

  addTodo(): void {
    if (this.description) {
      this.create.emit(this.description);
      this.description = '';
    }
  }

  get todoName() {
    return this.todoGroup.controls;
  }
}
