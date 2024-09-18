import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
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
  public upperCaseMenuItems: string[] = this.menuItems.map((item) => {
    return item.toUpperCase();
  });
  showMenuItems = this.upperCaseMenuItems;

  constructor() {
    console.log(this.aboutCompany);
  }

  changeMenuText() {
    this.showMenuItems = this.upperCaseMenuItems.map((item: string) =>
      this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    );
    this.isUpperCase = !this.isUpperCase;
  }
}
