import { Component, HostBinding, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UntypedFormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatSidenav } from '@angular/material/sidenav';
import { ThemeService } from './theme.service';

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
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.changeTheme();
  }

  changeTheme() {
    // Check if the user prefers dark mode
    const prefersDarkMode = this.themeService.isDarkMode();
    // console.log(prefersDarkMode);

    this.toggleControl.valueChanges.subscribe(val => {
      const darkModeClass = 'unicorn-dark-theme';
      const bocchiThemeClass = 'bocchi-theme';

      // Map the value of val to the corresponding class
      const selectedClass = val === 'Dark Theme' ? darkModeClass : val === '' ? '' : bocchiThemeClass;

      // Update this.className
      this.className = selectedClass;

      // Update classes on overlayContainer
      const classes = this.overlayContainer.getContainerElement().classList;
      classes.remove(darkModeClass, bocchiThemeClass);
      if (selectedClass !== '') {
        classes.add(selectedClass);
      }
    });

    if (prefersDarkMode === true) {
      this.toggleControl.setValue(prefersDarkMode ? 'Dark Theme' : '');
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
