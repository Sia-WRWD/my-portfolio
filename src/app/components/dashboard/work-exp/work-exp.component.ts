import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-exp',
  templateUrl: './work-exp.component.html',
  styleUrls: ['./work-exp.component.scss']
})
export class WorkExpComponent implements OnInit {

  exp1_Visible: boolean = false;
  exp2_Visible: boolean = false;
  exp3_Visible: boolean = false;
  exp4_Visible: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.exp1_Visible = true;
    this.exp2_Visible = false;
    this.exp3_Visible = false;
    this.exp4_Visible = false;
  }

  showExp1() {
    this.exp1_Visible = true;
    this.exp2_Visible = false;
    this.exp3_Visible = false;
    this.exp4_Visible = false;
  }

  showExp2() {
    this.exp1_Visible = false;
    this.exp2_Visible = true;
    this.exp3_Visible = false;
    this.exp4_Visible = false;
  }

  showExp3() {
    this.exp1_Visible = false;
    this.exp2_Visible = false;
    this.exp3_Visible = true;
    this.exp4_Visible = false;
  }

  showExp4() {
    this.exp1_Visible = false;
    this.exp2_Visible = false;
    this.exp3_Visible = false;
    this.exp4_Visible = true;
  }

}
