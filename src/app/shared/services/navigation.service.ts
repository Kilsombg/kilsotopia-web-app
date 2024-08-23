import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { NavItem } from "../../navigation-bar/navigation-bar.component";

@Injectable()
export class NavigationService {
    private activeNavItemProperty: BehaviorSubject<NavItem> = new BehaviorSubject<NavItem>(null);
    activeNavItemProperty$: Observable<NavItem> = this.activeNavItemProperty.asObservable();

    alterActiveNavItem(alteredProperty: string): void {
        var alteredNavItemProperty = this.getActiveNavItem(alteredProperty);

        if (alteredNavItemProperty !== null) {
            this.activeNavItemProperty.next(alteredNavItemProperty);
        }
    }

    public getActiveNavItem(currUrl: string): NavItem {

        switch (currUrl) {
            case "":
            case "home": {
                return NavItem.Home;
            }
            case "calendar": {
                return NavItem.Calendar;
            }
            case "others": {
                return NavItem.Others;
            }
            default:
                console.log("Active url not found in navigation! - " + currUrl);
                return null;
        }
    }
}