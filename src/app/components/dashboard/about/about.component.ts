import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  private shouldApplyTilt(): boolean {
    // Adjust the screen width threshold based on your definition of "mobile"
    const mobileScreenWidth = 768;
    console.log(window.innerWidth);
    return window.innerWidth > mobileScreenWidth;
  }


  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (this.shouldApplyTilt()) {
      VanillaTilt.init(
        this.el.nativeElement.querySelectorAll('.tilt-object'),
        { max: 20, speed: 150, scale: 1.05 }
      );
    }
  }
}
