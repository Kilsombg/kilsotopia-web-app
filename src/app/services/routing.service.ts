import { Injectable } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { filter, startWith } from "rxjs";

@Injectable()
export class RoutingService {

    private currentUrl: string = "";

    constructor(private router: Router) {
        this.onRouterChange();
    }

    public getCurrentUrl(): string | null {
        return this.currentUrl;
    }

    public onRouterChange(): void {
        this.router.events.pipe(
            filter((e) => e instanceof NavigationStart),
            startWith(this.router))
            .subscribe((event: NavigationStart | any) => {
                if (event.titleStrategy) {
                    this.currentUrl = event.titleStrategy.title._doc.URL.split('/')[3]; // URL has 3 '/' before path starts
                }
                else {
                    this.currentUrl = event.url.split('/')[1];
                }
            });
    }
}