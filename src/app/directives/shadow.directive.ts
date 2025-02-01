import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[shadow]',
  standalone: true,
})
export class ShadowDirective {
  @Input() shadowColor: string = 'rgb(50, 9, 236)';
  constructor(private el: ElementRef) {}
  @HostListener('mouseenter') MouseEnter() {
    this.addShadow();
  }
  @HostListener('mouseleave') MouseLeave() {
    this.removeShadow();
  }
  private addShadow() {
    this.el.nativeElement.style.boxShadow = `0 0 10px ${this.shadowColor}`;
    this.el.nativeElement.style.transition = 'box-shadow 0.3s ease';
  }
  private removeShadow() {
    this.el.nativeElement.style.boxShadow = 'none';
  }
}
