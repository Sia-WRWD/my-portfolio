import { Component, HostBinding } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UntypedFormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  @HostBinding('class') className = '';
  toggleControl = new UntypedFormControl(false);
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private overlayContainer: OverlayContainer,
    ) {}

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe(val => {
      const darkModeClass = 'unicorn-dark-theme';
      this.className = val ? darkModeClass : '';

      const classes = this.overlayContainer.getContainerElement().classList;
      if(val) {
        classes.add(darkModeClass);
      } else {
        classes.remove(darkModeClass);
      }
    })
  }
  
  directAbout() {
    let x = document.querySelector("#about");
    if (x) {
      x.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }

  directExp() {
    let x = document.querySelector("#exp");
    if (x) {
      x.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }

  directProj() {
    let x = document.querySelector("#proj");
    if (x) {
      x.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }

  directContact() {
    let x = document.querySelector("#contact");
    if (x) {
      x.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }

}
