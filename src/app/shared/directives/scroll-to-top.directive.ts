import { CommonModule } from '@angular/common';
import { NgModule, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[scrollToTop]',
  exportAs: 'scrollToTop',
})
export class ScrollToTopDirective {
  reached = false;
  passed = false;

  constructor(public el: ElementRef) { }


  @HostListener('window:scroll', ['$event']) onWindowScroll(e: any) {

    const elementPosition = this.el.nativeElement.offsetTop - 150;
    const elementHeight = this.el.nativeElement.clientHeight;
    const scrollPosition = window.pageYOffset;

    // set `true` when scrolling has reached current element
    this.reached = scrollPosition >= elementPosition;
    this.passed = scrollPosition <= elementPosition;

    if (this.reached == true) {
        document.getElementById('stt')!.style.visibility='visible';
    } else if (this.passed == true) {
        document.getElementById('stt')!.style.visibility='hidden';
    }
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [ ScrollToTopDirective ],
  exports: [ ScrollToTopDirective ]
})

export class ScrollToTopDirectiveModule {}