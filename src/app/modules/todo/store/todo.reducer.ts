import {ITodoItem} from "../../../todo-model/todo.model";
import {createReducer, on} from "@ngrx/store";
import * as TodoListActions from "./todo.actions";

export const TODO_REDUCER_NODE = 'todo';

export interface TodoState {
  idIncrement: number,
  todoList: ITodoItem[];
}

const initialState: TodoState = {
  idIncrement: 1,
  todoList: []
}

export const todoReducer = createReducer(
  initialState,
  on(
    TodoListActions.todoCreate,
    (state, { description }) => ({...state, idIncrement: state.idIncrement + 1, todoList:
        [...state.todoList,
          {
            id: state.idIncrement,
            description: description,
            date: Date.now(),
            completed: false
          }
        ]
    })
  ),
  on(
    TodoListActions.todoToggle,
    (state, { id }) => ({
      ...state,
      todoList: state.todoList.map(todo => todo.id === id ? {
        ...todo,
        completed: !todo.completed
      } : todo)
    })
  ),
  on(
    TodoListActions.todoDelete,
    (state, { id }) => ({
      ...state,
      todoList: state.todoList.filter(todo => todo.id !== id)
    })
  ),
  on(
    TodoListActions.todoLoad,
    (state, { todoState }) => ({
      ...todoState
    })
  )
)
