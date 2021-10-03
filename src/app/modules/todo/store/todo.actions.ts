import {Action} from "@ngrx/store";
import {TodoState} from "./todo.reducer";

export enum todoActionsType {
  create = '[TODO] create todo item',
  toggle = '[TODO] toggle todo item',
  delete = '[TODO] delete todo item',
  load = '[TODO] load todo state',
}

export class TodoCreateAction implements Action {
  readonly type = todoActionsType.create;
  constructor(public payload: { description: string; }) {}
}

export class TodoToggleAction implements Action {
  readonly type = todoActionsType.toggle;
  constructor(public payload: { id: number; }) {}
}

export class TodoDeleteAction implements Action {
  readonly type = todoActionsType.delete;
  constructor(public payload: { id: number; }) {}
}

export class TodoLoadAction implements Action {
  readonly type = todoActionsType.load;
  constructor(public payload: { state: TodoState }) {
  }
}


export type TodoActions = TodoCreateAction | TodoToggleAction | TodoDeleteAction | TodoLoadAction;
