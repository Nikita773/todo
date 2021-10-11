import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {TodoState} from "../store/todo.reducer";
import {todoLoad} from "../store/todo.actions";

export const TODO_LOCALSTORAGE_KEY = 'todo';

@Injectable({providedIn: "root"})
export class TodosService {
  private isInit = false;

  constructor(private store$: Store<TodoState>) {}

  init(): void {
    if (this.isInit) {
      return;
    }
    this.isInit = true;
    this.loadFromStorage();
  }

  loadFromStorage(): void {
    const storageState = localStorage.getItem(TODO_LOCALSTORAGE_KEY);
    if (storageState) {
      this.store$.dispatch(todoLoad({
        todoState: JSON.parse(storageState)
      }));
    }
  }
}
