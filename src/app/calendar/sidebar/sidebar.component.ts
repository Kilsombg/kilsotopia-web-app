import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({

  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls:['./sidebar.component.css']
})

export class SidebarComponent {
  constructor(private router: Router) { }
}