import {createAction, props} from "@ngrx/store";
import {TodoState} from "./todo.reducer";

export enum todoActionsType {
  create = '[TODO] create todo item',
  toggle = '[TODO] toggle todo item',
  delete = '[TODO] delete todo item',
  load = '[TODO] load todo state',
}

export const todoCreate = createAction(
  todoActionsType.create,
  props<{description: string;}>()
);

export const todoToggle = createAction(
  todoActionsType.toggle,
  props<{id: number;}>()
);

export const todoDelete = createAction(
  todoActionsType.delete,
  props<{id: number;}>()
);

export const todoLoad = createAction(
  todoActionsType.load,
  props<{todoState: TodoState;}>()
);
