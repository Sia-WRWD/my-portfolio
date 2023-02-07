import { Component, ElementRef, OnInit } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

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

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.currentItem = this.items[0];
    this.currentRole = this.roles[0];
    this.changeText();
    this.changeRole();
    this.applySlideTop();
    VanillaTilt.init(
      this.el.nativeElement.querySelectorAll(".tilt-object"), { max: 20, speed: 150, scale: 1.05 }
    );
  }

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
      x.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }

}
