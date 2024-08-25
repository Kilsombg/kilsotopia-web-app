import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../shared/services/routing.service';
import { NavigationService } from '../shared/services/navigation.service';
import { AccountService } from '../account/account.service';

export enum NavItem {
  Home,
  Calendar,
  Others,
  Register,
  Login
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
    public accountService: AccountService,
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

  logout() {
    this.accountService.logout();
   }
}

