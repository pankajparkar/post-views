import { Component } from '@angular/core';
@Component({
  selector: 'pv-root',
  standalone: true,
  template: `<h1>Hello, {{name}}</h1>`,
  imports: [],
  styles: [],
})
export class AppComponent {
  name: string = 'World';
}