import { Component, ElementRef, OnInit, Renderer2, ViewChild, ViewEncapsulation  } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class IntroComponent implements OnInit {
  @ViewChild('typing') typingElement: ElementRef | undefined;

  items = [
    "Hello, my name is",
    "Helo, nama saya adalah",
    "你好, 我的名字是",
    "こんにちは, 私の名前は"
  ];
  roles = [
    "Web Developer",
    "Front-End Developer",
    "Back-End Developer",
    "AI Engineer"
  ]
  currentItem: any;
  currentRole: any;
  interval: any;
  roleInterval: any;
  private pointer: number = 0;
  private rolePointer: number = 0;

  private shouldApplyTilt(): boolean {
    // Adjust the screen width threshold based on your definition of "mobile"
    const mobileScreenWidth = 768;
    return window.innerWidth > mobileScreenWidth;
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.currentItem = this.items[0];
    this.currentRole = this.roles[0];
    this.changeText();
    this.changeRole();
    this.applySlideTop();
  }

  ngAfterViewInit() {
    if (this.typingElement) {
      this.typingElement.nativeElement.addEventListener('animationend', this.animationEndHandler);
    }

    if (this.shouldApplyTilt()) {
      VanillaTilt.init(
        this.el.nativeElement.querySelectorAll('.tilt-object'),
        { max: 20, speed: 150, scale: 1.05 }
      );
    }
  }

  animationEndHandler = (event: AnimationEvent) => {
    if (event.animationName.includes('typing')) {
      // Set the final style after the animation is complete
      if (this.typingElement) {
        setTimeout(() => {
          this.typingElement.nativeElement.style.borderRight = '0px';
        }, 2000);
      }
    }
  };

  changeText() {
    this.interval = setInterval(() => {
      this.currentItem = this.items[this.pointer];
      this.pointer++;
      if (this.pointer > 3) { this.pointer = 0 };
    }, 3000);
  }

  changeRole() {
    this.roleInterval = setInterval(() => {
      this.currentRole = this.roles[this.rolePointer];
      this.rolePointer++;
      if (this.rolePointer > 3) { this.rolePointer = 0 };
    }, 3000)
  }

  applySlideTop() {
    var x = document.getElementById("showSlide");
    x.classList.remove("hide");
    x.classList.add("slideTop");
  }

  directAbout() {
    let x = document.querySelector("#about");
    if (x) {
      x.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  }

}
