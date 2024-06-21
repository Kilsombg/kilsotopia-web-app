import { Component } from '@angular/core';
import { DayService } from './day/day.service';
import { Day } from './day/day.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
    '../assets/styles/template.css']
})
export class AppComponent {
  title = 'calendar-web-app';

  constructor() { }
}
