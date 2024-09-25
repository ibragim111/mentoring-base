import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todos-list.component';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
  standalone: true,
  imports: [],
})
export class TodoCardComponent {
  @Input({ required: true })
  todo!: Todo;
  @Output()
  deleteTodo = new EventEmitter();

  onDeleteTodo(): void {
    this.deleteTodo.emit(this.todo.id);
  }
}
