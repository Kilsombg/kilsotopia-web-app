import { Component } from '@angular/core';

enum Items {
  Home,
  Calendar,
  Others
}

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  Items = Items;
  active: Items = Items.Calendar;

  onClickHome(): void {
    this.active = Items.Home;
  }

  onClickCalendar(): void {
    this.active = Items.Calendar;
  }

  onClickOthers(): void {
    this.active = Items.Others;
  }
}
