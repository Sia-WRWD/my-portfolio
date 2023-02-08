import { Component, ElementRef, OnInit } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    VanillaTilt.init(
      this.el.nativeElement.querySelectorAll(".tilt-object"), { max: 20, speed: 150, scale: 1.05 }
    );
  }

}
