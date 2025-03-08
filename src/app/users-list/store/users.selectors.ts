import { createSelector } from '@ngrx/store';
import { User } from '../../interfaces/user.interface';

interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

interface AppState {
  users: UserState;
}

export const selectUsersFeature = (state: AppState) => state.users;

export const selectUsers = createSelector(
  selectUsersFeature,
  (state: UserState) => state.users
);
