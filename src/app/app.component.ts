import { Component } from '@angular/core';

@Component({
  host: { class: 'h-screen block' },
  selector: 'it-root',
  standalone: false,
  template: `
    <p-toast />
    <router-outlet />
  `,
})
export class AppComponent {}
