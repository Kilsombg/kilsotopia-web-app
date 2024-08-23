import { Injectable } from "@angular/core";
import { Location } from '@angular/common';
import { NavigationService } from "./navigation.service";

@Injectable()
export class LocationService {

    constructor(
        private location: Location,
        private navigationService: NavigationService
    ) { }

    addPopstateListener() {
        this.location.subscribe(event => {
            this.navigationService.alterActiveNavItem(event.url.split('/')[1]);
        });
    }
}