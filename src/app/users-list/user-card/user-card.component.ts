import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../users-list.component';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  standalone: true,
})
export class UserCardComponent {
  @Input({ required: true })
  user!: User;

  @Output()
  deleteUser = new EventEmitter();

  onDeleteUser(userid: number) {
    this.deleteUser.emit(userid);
  }
}
