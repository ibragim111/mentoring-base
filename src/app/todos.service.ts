import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from './todos-list/todos-list.component';

@Injectable({ providedIn: 'root' })
export class TodosService {
  todosSubject$ = new BehaviorSubject<Todo[]>([]);

  setTodos(todos: Todo[]) {
    this.todosSubject$.next(todos);
  }

  editTodos(editedTodos: Todo) {
    this.todosSubject$.value.map((todo) => {
      if (todo.id === editedTodos.id) {
        return editedTodos.id;
      } else {
        return todo;
      }
    });
  }

  createTodos(todo: Todo) {
    this.todosSubject$.next([...this.todosSubject$.value, todo]);
  }

  deleteTodos(id: number) {
    this.todosSubject$.next(
      this.todosSubject$.value.filter((item) => {
        if (id === item.id) {
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
