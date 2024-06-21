import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({

  selector: 'navigaiton_bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls:['./navigation-bar.component.css']
})

export class NavigationBarComponent {
  constructor(private router: Router) { }
}