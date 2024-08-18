import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingService } from '../services/routing.service';
import { NavigationService } from '../services/navigation.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(
    private router: Router,
    private routingService: RoutingService,
    private navigationService: NavigationService,
    private scroller: ViewportScroller) { }

  showTopButton: boolean = false;


  onCalendarIconClick(): void {
    this.scroller.scrollToAnchor("section-calendar");
  }

  onCalendarBtnClick(): void {
    var currentUrl = this.routingService.getCurrentUrl();

    this.navigationService.alterActiveNavItem(currentUrl);
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showTopButton = window.scrollY > 350;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
