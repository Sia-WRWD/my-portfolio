import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  items = [
    "Hello, my name is",
    "Apa Khabar, nama saya adalah",
    "你好, 我的名字是",
    "こんにちは, 私の名前は"
  ];
  currentItem: any;
  interval: any;
  private pointer: number = 0;
  
  reached = false;
  passed = false;

  constructor() { }

  ngOnInit() {
    this.currentItem = this.items[0];
    this.changeText();
  }

  changeText() {
    this.interval = setInterval(() => {
      this.currentItem = this.items[this.pointer];
      this.pointer++;
      if (this.pointer > 3) { this.pointer = 0 };
    }, 3000);
  }

  scrollToTop() {
    let x = document.querySelector("#intro");
    if (x) {
      x.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }

}
