import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { TestDialogComponent } from '../test-dialog/test-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
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

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.currentItem = this.items[0];
    this.changeText();
  }

  openDialog() {
    const dialogRef = this.dialog.open(TestDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  changeText() {
    this.interval = setInterval(() => {
      this.currentItem = this.items[this.pointer];
      this.pointer++;
      if (this.pointer > 3) { this.pointer = 0 };
    }, 3000);
  }

}
