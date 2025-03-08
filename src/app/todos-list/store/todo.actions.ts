import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Todo } from '../../interfaces/todo.interface';

export const TodosActions = createActionGroup({
  source: 'Todos',
  events: {
    'Load Todos': emptyProps(),
    'Load Todos Failure': props<{ error: string }>(),
    set: props<{ todos: Todo[] }>(),

    edit: props<{ todo: Todo }>(),

    create: props<{ todo: Todo }>(),
    delete: props<{ id: number }>(),
  },
});
