import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { UserApiService } from '../../users-api.service';
import { UsersActions } from './user.actions';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.loadUsers),

      mergeMap(() =>
        this.userApiService.getUsers().pipe(
          map((users) => UsersActions.set({ users })),

          catchError((error) =>
            of(
              UsersActions.loadUsersFailure({
                error: 'не удалось загрузить пользователей',
              })
            )
          )
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private userApiService: UserApiService
  ) {}
}
