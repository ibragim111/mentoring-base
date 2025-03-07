import { NgFor, NgIf, DatePipe, AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomDatePipe } from '../../pipes/custom-date.pipe';
import { CustomNumberPfonePipe } from '../../pipes/phone-format.pipe';
import { YellowDirective } from '../../directives/yellow.directive';
import { MatDialog } from '@angular/material/dialog';
import { AuthComponent } from '../../auth/auth.component';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    RouterLink,
    CustomDatePipe,
    CustomNumberPfonePipe,
    YellowDirective,
    AsyncPipe,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly dialog = inject(MatDialog);
  public readonly userService = inject(UserService);
  currentDate = new Date();
  isShowCatalog = true;
  readonly HeaderItem1 = 'Главная';
  readonly aboutCompany = 'О компании';
  readonly HeaderItem3 = 'Каталог';

  isUpperCase = true;

  menuItems: string[] = [
    'Каталог',
    'Стройматериалы',
    'Инструменты',
    'Электрика',
    'Интерьер и одежда',
  ];

  upperCaseMenuItems = this.menuItems;

  constructor() {
    console.log(this.aboutCompany);
  }

  changeMenuText() {
    this.menuItems = this.upperCaseMenuItems.map((item: string) =>
      this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    );
    this.isUpperCase = !this.isUpperCase;
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AuthComponent, {
      width: '400px',
      height: '200px',
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      console.log('результат подписки Диалогового окна - -', result);
      if (result === 'admin') {
        this.userService.loginAsAdmin();
      } else if (result === 'user') {
        this.userService.loginAsUser();
      } else return undefined;
    });
  }

  public logout() {
    if (confirm('вы действительно хотите выйти ?')) {
      console.log('совершили logout');
      return this.userService.logout();
    } else return false;
  }
}
