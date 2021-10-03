import {Injectable} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {TodoState} from "../store/todo.reducer";
import {todoFeatureSelector} from "../store/todo.selectors";
import {filter} from "rxjs/operators";
import {TodoLoadAction} from "../store/todo.actions";

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

    this.store$.pipe(
      select(todoFeatureSelector),
      filter(state => !!state)
    ).subscribe(state => {
      localStorage.setItem(TODO_LOCALSTORAGE_KEY, JSON.stringify(state));
    });
  }

  loadFromStorage(): void {
    const storageState = localStorage.getItem(TODO_LOCALSTORAGE_KEY);
    if (storageState) {
      this.store$.dispatch(new TodoLoadAction({
        state: JSON.parse(storageState)
      }));
    }
  }
}
