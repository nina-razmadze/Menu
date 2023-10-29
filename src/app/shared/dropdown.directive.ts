import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[app-dropdown]',
})
export class DropdownDirective {
  private isOpen: boolean = false;
  constructor(private Elref: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.renderer.addClass(this.Elref.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.Elref.nativeElement, 'open');
    }
  }
}
