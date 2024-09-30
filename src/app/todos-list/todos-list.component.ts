import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Injectable,
} from '@angular/core';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodosApiService } from '../todos-api.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { TodosService } from '../todos.service';

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [NgFor, TodoCardComponent, AsyncPipe],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService);
  readonly todosService = inject(TodosService);

  constructor() {
    this.todosApiService.getTodos().subscribe((response: any) => {
      this.todosService.setTodos(response);
      // console.log('TODOS:', this.todos);
    });
  }

  deleteTodo(id: number): void {
    this.todosService.deleteTodos(id);
  }
}
