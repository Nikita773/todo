import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {TODO_LOCALSTORAGE_KEY} from "../services/todos.service";
import {Store} from "@ngrx/store";
import {filter, tap, withLatestFrom} from "rxjs/operators";
import {todoCreate, todoDelete} from "./todo.actions";
import {todoFeatureSelector} from "./todo.selectors";

@Injectable()
export class TodoEffect {
  addTodoToLocalStorage = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(todoCreate, todoDelete),
        withLatestFrom(this.store$.select(todoFeatureSelector)),
        filter(([,state]) => !!state),
        tap(([,state]) => localStorage.setItem(TODO_LOCALSTORAGE_KEY, JSON.stringify(state)))
      );
    },
    {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private store$: Store,
  ) {}
}
