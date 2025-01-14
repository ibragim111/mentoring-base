import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './interfaces/user.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private snackbar = inject(MatSnackBar);
  private usersSubject$ = new BehaviorSubject<User[]>([]);
  public usersList$ = this.usersSubject$.asObservable();

  setUsers(users: User[]) {
    this.usersSubject$.next(users);
  }

  editUser(editedUser: User) {
    this.usersSubject$.next(
      this.usersSubject$.value.map((user) => {
        if (user.id === editedUser.id) {
          return editedUser;
        } else {
          return user;
        }
      })
    );
  }

  createUser(user: User) {
    const existingUser = this.usersSubject$.value.find(
      (currentElement) => currentElement.email === user.email
    );

    if (existingUser !== undefined) {
      this.snackbar.open('Такой Email уже зарегистрирован', 'Ок', {
        duration: 5000,
      });
    } else {
      this.usersSubject$.next([...this.usersSubject$.value, user]);
      this.snackbar.open('Пользователь успешно создан', 'Ок', {
        duration: 5000,
      });
    }
  }

  deleteUser(id: number) {
    this.usersSubject$.next(
      this.usersSubject$.value.filter((item) => {
        if (id === item.id) {
          this.snackbar.open('пользователь удалён', 'Ок', { duration: 5000 });
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
