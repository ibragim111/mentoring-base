import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodosApiService } from '../todos-api.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { CreateTodoFormComponent } from '../create-todo-form/create-todo-form.component';
import { Todo, createTodoI } from '../interfaces/todo.interface';
import { Store } from '@ngrx/store';
import { TodosActions } from './store/todo.actions';
import { selectTodos } from './store/todos.selectors';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [NgFor, TodoCardComponent, AsyncPipe, CreateTodoFormComponent],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService);

  private readonly store = inject(Store);
  public readonly todos$ = this.store.select(selectTodos);

  constructor() {
    this.store.dispatch(TodosActions.loadTodos());
  }

  deleteTodo(id: number): void {
    this.store.dispatch(TodosActions.delete({ id }));
  }

  editTodo(todo: Todo) {
    this.store.dispatch(TodosActions.edit({ todo }));
  }

  public createTodo(formData: createTodoI) {
    this.store.dispatch(
      TodosActions.create({
        todo: {
          id: new Date().getTime(),
          title: formData.title,
          userId: formData.userId,
          completed: formData.completed,
        },
      })
    );
  }
}
