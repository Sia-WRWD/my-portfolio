import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  items = [
    "Hello, my name is",
    "Apa Khabar, nama saya adalah",
    "你好, 我的名字是",
    "こんにちは, 私の名前は"
  ];
  currentItem: any;
  interval: any;
  private pointer: number = 0;

  constructor() { }

  ngOnInit(): void {
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

}
