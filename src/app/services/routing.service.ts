import { Injectable } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { filter, startWith } from "rxjs";

@Injectable()
export class RoutingService {

    private currentUrl: string[] = [];

    constructor(private router: Router) {
        this.onRouterChange();
    }

    public getCurrentUrl(): string | null {
        return this.currentUrl[0];
    }

    public getCurrentFullUrl(): string[] {
        return this.currentUrl;
    }

    public onRouterChange(): void {
        this.router.events.pipe(
            filter((e) => e instanceof NavigationStart),
            startWith(this.router))
            .subscribe((event: NavigationStart | any) => {
                if (event.titleStrategy) {
                    var titleUrlArr = event.titleStrategy.title._doc.URL.split('/');
                    this.currentUrl = titleUrlArr.splice(3, titleUrlArr.length); // URL has 3 '/' before path starts
                }
                else {
                    var urlArr = event.url.split('/');
                    this.currentUrl = urlArr.splice(1,urlArr.length);
                }
            });
    }
}