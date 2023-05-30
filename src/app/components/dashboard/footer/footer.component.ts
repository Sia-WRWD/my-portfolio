import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  directIntro() {
    let x = document.querySelector("#intro");
    if (x) {
      x.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  }

  directAbout() {
    let x = document.querySelector("#about");
    if (x) {
      x.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  }

  directSkills() {
    let x = document.querySelector("#skills");
    if (x) {
      x.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  }

  directEdu() {
    let x = document.querySelector("#edu");
    if (x) {
      x.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  }

  directProj() {
    let x = document.querySelector("#proj");
    if (x) {
      x.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  }

  directExp() {
    let x = document.querySelector("#exp");
    if (x) {
      x.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  }

  directContact() {
    let x = document.querySelector("#contact");
    if (x) {
      x.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  }

}
