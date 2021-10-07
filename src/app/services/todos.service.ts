import {Injectable} from "@angular/core";
import {ITodoItem} from "../todo-model/todo.model";
import {BehaviorSubject} from "rxjs";

@Injectable({providedIn: "root"})
export class TodosService {

  nextId: number;
  todos$ = new BehaviorSubject<ITodoItem[]>(this.getTodos());

  addTodo(todo: ITodoItem): void {
    this.todos$.next([...this.todos$.value, todo])
    this.setLocalStorage();
  }

  getTodos(): ITodoItem[] {
    const localStorageItem = JSON.parse(<string>localStorage.getItem('todos'));
    if(!localStorageItem) {
      return [];
    }
    return localStorageItem;
  }

  removeTodo(id: number): void {
    this.todos$.next(this.todos$.value.filter(todo => todo.id !== id));
    this.setLocalStorage();
  }

  setLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos$.value));
  }

  getTodoId(): number {
    if (this.todos$.value.length === 0) {
      return this.nextId = 1;
    } else {
      let maxId = this.todos$.value[this.todos$.value.length - 1].id;
      return this.nextId = maxId + 1;
    }
  }
}
