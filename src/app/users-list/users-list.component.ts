import { HttpClient } from '@angular/common/http';
import { Component, inject, Injectable } from '@angular/core';

@Injectable()
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  readonly apiService = inject(HttpClient);

  constructor() {
    this.apiService
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((response) => {
        console.log(response);
      });
  }
}
