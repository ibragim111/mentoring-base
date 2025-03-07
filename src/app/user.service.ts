import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IUser {
  name: string;
  email: string;
  isAdmin: boolean | null;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly usersSubject$ = new BehaviorSubject<IUser | null>(null);
  public readonly user$ = this.usersSubject$.asObservable();
  private user: IUser = {
    name: 'Ibragim',
    email: 'Ibragimov',
    isAdmin: null,
  };
  loginAsAdmin() {
    this.usersSubject$.next({ ...this.user, isAdmin: true });
    console.log('вошли как админ');
  }
  loginAsUser() {
    this.usersSubject$.next({ ...this.user, isAdmin: false });
    console.log('вошли как пользователь');
  }
  get isAdmin() {
    return this.usersSubject$.value?.isAdmin;
  }
  logout() {
    this.usersSubject$.next(null);
    console.log(this.usersSubject$);
  }
}
