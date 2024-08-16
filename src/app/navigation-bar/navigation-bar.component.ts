import { Component } from '@angular/core';
import { RoutingService } from '../services/routing.service';

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

  constructor(private routingService: RoutingService) {
    this.checkActiveUrl();
  }

  checkActiveUrl() {
    var currUrl = this.routingService.getCurrentUrl();

    switch (currUrl) {
      case "":
      case "home": {
        this.active = Items.Home;
        break;
      }
      case "calendar": {
        this.active = Items.Calendar;
        break;
      }
      case "others": {
        this.active = Items.Others;
        break;
      }
      default:
        console.log("Active url not found in navigation! - " + currUrl);
    }
  }
}

