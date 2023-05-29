import { Component, HostBinding, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UntypedFormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  @HostBinding('class') className = '';
  toggleControl = new UntypedFormControl("");
  themes = [
    { name: "Light Theme", value: "" },
    { name: "Dark Theme", value: "Dark Theme" },
    { name: "Bocchi Theme", value: "Bocchi Theme" }
  ];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  @ViewChild(MatSidenav, { static: false }) sidenav!: MatSidenav;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private overlayContainer: OverlayContainer,
  ) { }

  ngOnInit(): void {
    this.changeTheme();
  }

  changeTheme() {
    this.toggleControl.valueChanges.subscribe(val => {
      const darkModeClass = 'unicorn-dark-theme';
      const bocchiThemeClass = 'bocchi-theme';
      if (val == "") {
        this.className = "";
      } else if (val == "Dark Theme") {
        this.className = darkModeClass;
      } else {
        this.className = bocchiThemeClass
      }
      console.log(this.className);

      const classes = this.overlayContainer.getContainerElement().classList;
      if (val == "") {
        this.className = "";
        classes.remove(darkModeClass);
        classes.remove(bocchiThemeClass);
      } else if (val == "Dark Theme") {
        classes.add(darkModeClass);
        classes.remove(bocchiThemeClass);
      } else {
        classes.add(bocchiThemeClass);
        classes.remove(darkModeClass);
      }

      this.changeBackgroundImage(val);
      this.changeOverlayVisibility(val);
    })
  }

  changeBackgroundImage(val: string) {
    var introBg = document.getElementById("intro-img");
    var aboutBg = document.getElementById("about-img");
    var skillBg = document.getElementById("skills-img");
    var eduBg = document.getElementById("edu-img");
    var expBg = document.getElementById("exp-img");

    if (val == "") {
      introBg.style.backgroundImage = "url('../../../assets/pictures/intro/sky.jpg')";
      aboutBg.style.backgroundImage = "url('../../../assets/pictures/about/sunset.jpg')";
      skillBg.style.backgroundImage = "url('../../../assets/pictures/skills/coding.jpg')";
      eduBg.style.backgroundImage = "url('../../../assets/pictures/edu/edu.jpg')";
      expBg.style.backgroundImage = "url('../../../assets/pictures/exp/exp.jpg')";
    } else if (val == "Dark Theme") {
      introBg.style.backgroundImage = "url('../../../assets/pictures/intro/galaxy.jpg')";
      aboutBg.style.backgroundImage = "url('../../../assets/pictures/about/night-sky.jpg')";
      skillBg.style.backgroundImage = "url('../../../assets/pictures/skills/dark-coding.jpg')";
      eduBg.style.backgroundImage = "url('../../../assets/pictures/edu/dark-edu.jpg')";
      expBg.style.backgroundImage = "url('../../../assets/pictures/exp/dark-exp.jpg')";
    } else {
      introBg.style.backgroundImage = "url('../../../assets/pictures/intro/bocchi-scared.jpg')";
      aboutBg.style.backgroundImage = "url('../../../assets/pictures/about/bocchi-happy.png')";
      skillBg.style.backgroundImage = "url('../../../assets/pictures/skills/coding-anime.jpg')";
      eduBg.style.backgroundImage = "url('../../../assets/pictures/edu/bocchi-edu.png')";
      expBg.style.backgroundImage = "url('../../../assets/pictures/exp/bocchi-exp.jpg')";
    }
  }

  changeOverlayVisibility(val: string) {
    var overlay = document.getElementById("intro-dark-overlay");

    if (val == "") {
      overlay.style.opacity = "0";
    } else {
      overlay.style.opacity = "0.5";
    }
  }

  closeSidebar() {
    setTimeout(() => {
      this.sidenav.close();
    }, 1000);
  }

  directIntro() {
    let x = document.querySelector("#intro");
    if (x) {
      x.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
    this.closeSidebar();
  }

  directAbout() {
    let x = document.querySelector("#about");
    if (x) {
      x.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
    this.closeSidebar();
  }

  directSkills() {
    let x = document.querySelector("#skills");
    if (x) {
      x.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
    this.closeSidebar();
  }

  directEdu() {
    let x = document.querySelector("#edu");
    if (x) {
      x.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
    this.closeSidebar();
  }

  directProj() {
    let x = document.querySelector("#proj");
    if (x) {
      x.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
    this.closeSidebar();
  }

  directExp() {
    let x = document.querySelector("#exp");
    if (x) {
      x.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
    this.closeSidebar();
  }

  directContact() {
    let x = document.querySelector("#contact");
    if (x) {
      x.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
    this.closeSidebar();
  }

}
