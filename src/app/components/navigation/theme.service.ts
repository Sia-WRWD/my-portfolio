import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDarkMode(): boolean {
    // Check for dark mode or light mode based on the system preference
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
}
