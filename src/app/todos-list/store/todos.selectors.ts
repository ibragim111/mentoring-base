import { createSelector } from '@ngrx/store';
import { Todo } from '../../interfaces/todo.interface';

interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

interface AppState {
  todos: TodoState;
}

export const selectTodosFeature = (state: AppState) => state.todos;

export const selectTodos = createSelector(
  selectTodosFeature,
  (state: TodoState) => state.todos
);
