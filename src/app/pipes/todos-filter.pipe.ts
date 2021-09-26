import {Pipe, PipeTransform} from "@angular/core";
import {ITodoItem} from "../todo-model/todo.model";

@Pipe({
  name: 'todosFilter'
})

export class TodosFilterPipe implements PipeTransform {
  transform(todos: ITodoItem[], search = ''): ITodoItem[] {
    if (!search.trim()) {
      return todos;
    }
    return todos.filter(todo => {
      return todo.description.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    })
  }
}
