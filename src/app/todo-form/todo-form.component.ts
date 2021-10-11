import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  @Output() create = new EventEmitter<string>();
  title = new FormControl('', Validators.required);

  addTodo(): void {
    if (this.title.value) {
      this.create.emit(this.title.value);
      this.title.setValue('');
    }
  }
}
