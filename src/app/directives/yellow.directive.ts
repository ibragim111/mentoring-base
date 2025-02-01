import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[yellow]',
  standalone: true,
})
export class YellowDirective {
  color = '#4b565e';

  @HostBinding('style.backgroundColor')
  get backgroundColor() {
    return this.color;
  }
  @HostListener('mouseenter')
  enter() {
    this.color = 'yellow';
  }

  @HostListener('mouseleave')
  leave() {
    this.color = '#4b565e';
  }
}
