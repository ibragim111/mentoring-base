import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Injectable } from '@angular/core';
import { UserApiService } from '../users-api.service';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
  };
}

@Injectable()
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  standalone: true,
  imports: [NgFor],
})
export class UsersListComponent {
  readonly usersApiService = inject(UserApiService);
  users: User[] = [];

  constructor() {
    this.usersApiService.getUsers().subscribe((response: any) => {
      this.users = response;
      console.log('USERS: ', this.users);
    });
  }
  deleteUser(id: number) {
    this.users = this.users.filter((item) => {
      if (id === item.id) {
        return false;
      } else {
        return true;
      }
    });
  }
}
