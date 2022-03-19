import { CommonModule } from '@angular/common';
import { NgModule, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[scrolledTo]',
  exportAs: 'scrolledTo',
})
export class ScrolledToDirective {
  reached = false;
  passed = false;

  constructor(public el: ElementRef) { }


  @HostListener('window:scroll', ['$event']) onWindowScroll(e: any) {

    const elementPosition = this.el.nativeElement.offsetTop - 150;
    const elementHeight = this.el.nativeElement.clientHeight;
    const scrollPosition = window.pageYOffset;

    // set `true` when scrolling has reached current element
    this.reached = scrollPosition >= elementPosition;

    // set `true` when scrolling has passed current element height
    this.passed = scrollPosition >= (elementPosition + elementHeight);
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [ ScrolledToDirective ],
  exports: [ ScrolledToDirective ]
})

export class ScrolledToDirectiveModule {}