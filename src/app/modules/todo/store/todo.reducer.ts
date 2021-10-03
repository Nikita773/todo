import {ITodoItem} from "../../../todo-model/todo.model";
import {TodoActions, todoActionsType} from "./todo.actions";

export const TODO_REDUCER_NODE = 'todo';

export interface TodoState {
  idIncrement: number,
  todoList: ITodoItem[];
}

const initialState: TodoState = {
  idIncrement: 1,
  todoList: []
}

export const todoReducer = (state = initialState, action: TodoActions) => {
  switch (action.type) {
    case todoActionsType.create:
      return {
        ...state,
        idIncrement: state.idIncrement + 1,
        todoList: [
          ...state.todoList,
          {
            id: state.idIncrement,
            description: action.payload.description,
            date: Date.now(),
            completed: false
          }
        ]
      };
    case todoActionsType.toggle:
      return {
        ...state,
        todoList: state.todoList.map(todo => todo.id === action.payload.id ? {
          ...todo,
          completed: !todo.completed
        } : todo)
      }
    case todoActionsType.delete:
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== action.payload.id)
      }
    case todoActionsType.load:
      return {
        ...action.payload.state
      }
    default:
      return state;
  }
}
