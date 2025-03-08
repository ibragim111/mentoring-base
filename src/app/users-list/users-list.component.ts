import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserApiService } from '../users-api.service';
import { UserCardComponent } from './user-card/user-card.component';

import { CreateUserFormComponent } from '../create-user-form/create-user-form.component';
import { createUserI, User } from '../interfaces/user.interface';
import { ShadowDirective } from '../directives/shadow.directive';
import { Store } from '@ngrx/store';
import { UsersActions } from './store/user.actions';
import { selectUsers } from './store/users.selectors';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  standalone: true,
  imports: [
    NgFor,
    UserCardComponent,
    AsyncPipe,
    CreateUserFormComponent,
    ShadowDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  readonly usersApiService = inject(UserApiService);

  private readonly store = inject(Store);
  public readonly users$ = this.store.select(selectUsers);

  constructor() {
    this.store.dispatch(UsersActions.loadUsers());
  }

  deleteUser(id: number): void {
    this.store.dispatch(UsersActions.delete({ id }));
  }

  editUser(user: createUserI) {
    this.store.dispatch(UsersActions.edit({ user }));
  }

  public createUser(formData: createUserI) {
    this.store.dispatch(
      UsersActions.create({
        user: {
          id: new Date().getTime(),
          name: formData.name,
          email: formData.email,
          website: formData.website,
          company: {
            name: formData.company.name,
          },
        },
      })
    );
  }
}
