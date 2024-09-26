import { Component, inject, Injectable } from '@angular/core';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodosApiService } from '../todos-api.service';
import { NgFor } from '@angular/common';

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [NgFor, TodoCardComponent],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
})
@Injectable()
export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService);

  todos: Todo[] = [];

  constructor() {
    this.todosApiService.getTodos().subscribe((response: any) => {
      this.todos = response;
      console.log('TODOS:', this.todos);
    });
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((todo) => {
      if (id === todo.id) {
        return false;
      }
      return true;
    });
  }
}
