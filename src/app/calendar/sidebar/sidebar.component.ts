import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { RoutingService } from "src/app/shared/services/routing.service";
import { SidebarService } from "./sidebar.service";

export enum SidebarItem {
  Calendar,
  Notes
}

@Component({

  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {
  sidebarItems = SidebarItem;
  active: SidebarItem;

  constructor(
    private router: Router,
    private routingService: RoutingService,
    private sidebarService: SidebarService
  ) { 
    this.setActiveSidebarItem();
  }

  setActiveSidebarItem(): void {
    var currFullUrl = this.routingService.getCurrentFullUrl();
    var activeOrNullSidebarItem = this.sidebarService.getActiveSidebarItem(currFullUrl);

    if (activeOrNullSidebarItem !== null) {
      this.active = activeOrNullSidebarItem;
    }

  }
}