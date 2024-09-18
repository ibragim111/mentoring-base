import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
  {
    path: 'users',
    component: UsersListComponent,
  },
];
