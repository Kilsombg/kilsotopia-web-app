import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calendar-web-app';
  month : string[] = [];

  constructor() {
    for(let i=1;i<31;i++)
      this.month.push(String(i));
  }
}
