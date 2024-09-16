import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//  задание 1
const AboutCompany = (name: string) => {
  console.log(name);
  return name;
};

const result = AboutCompany('О компании');

// задание 3
const newPages = [5, 4, 3, 2, 1];

const menuItems = [
  'Каталог',
  'Стройматериалы',
  'Инструменты',
  'Электрика',
  'Интерьер и одежда',
];

const upperCaseMenuItems = menuItems.map((item) => {
  return item.toUpperCase();
});

const user = {
  name: 'ibragim',
  surname: 'ibragimov',
  height: 173,
  weight: 67,
};

user.name = 'Petr';

console.log(user);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mentoring-first-project';
  // хедер 1
  isShowCatalog = true;
  readonly HeaderItem1 = 'Главная';
  readonly aboutCompany = result;
  readonly HeaderItem3 = 'Каталог';
  //  хедер 2

  readonly newPages = newPages;
  menuItems = upperCaseMenuItems;
  isUpperCase = true;

  changeMenuText() {
    this.menuItems = upperCaseMenuItems.map((item) =>
      this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    );
    this.isUpperCase = !this.isUpperCase;
  }
  //
  ImageBody = true;
}
