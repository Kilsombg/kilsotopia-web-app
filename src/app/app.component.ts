import { Component, OnInit } from '@angular/core';
import { LocationService } from './services/location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'calendar-web-app';

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.locationService.addPopstateListener();
  }
}
