import {Injectable} from "@angular/core";
import {ITodoItem} from "../todo-model/todo.model";

@Injectable({providedIn: "root"})
export class TodosService {

  todos = this.getTodos();
  nextId: number;

  addTodo(todo: ITodoItem): void {
    this.todos = this.getTodos();
    this.todos.push(todo);

    this.setLocalStorage();
  }

  getTodos(): ITodoItem[] {
    const localStorageItem = JSON.parse(<string>localStorage.getItem('todos'));
    if(localStorageItem === null) {
      return [];
    }
    return localStorageItem.todos;
  }

  removeTodo(id: number): void {
    this.todos = this.getTodos();
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.setLocalStorage();
  }

  setLocalStorage() {
    localStorage.setItem('todos', JSON.stringify({ todos: this.todos }));
  }

  getTodoId(): number {
    if (this.todos.length === 0) {
      return this.nextId = 1;
    } else {
      let maxId = this.todos[this.todos.length - 1].id;
      return this.nextId = maxId + 1;
    }
  }
}
