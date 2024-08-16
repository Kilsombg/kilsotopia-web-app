import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../services/routing.service';
import { NavigationService } from '../services/navigation.service';

export enum NavItem {
  Home,
  Calendar,
  Others
}

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  Items = NavItem;
  active: NavItem;

  constructor(
    private routingService: RoutingService,
    private navigationService: NavigationService
  ) {
    this.checkActiveUrl();
  }

  ngOnInit(): void {
    this.navigationService.activeNavItemProperty$
      .subscribe(alertedProperty => {
        if (alertedProperty !== null) {
          this.active = alertedProperty;
        }
      });
  }

  checkActiveUrl() {
    var currUrl = this.routingService.getCurrentUrl();
    var activeOrNullNavItem = this.navigationService.getActiveNavItem(currUrl);

    if (activeOrNullNavItem !== null) {
      this.active = activeOrNullNavItem;
    }
  }
}

