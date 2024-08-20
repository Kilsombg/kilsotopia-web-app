import { Injectable } from "@angular/core";
import { SidebarItem } from "./sidebar.component";

@Injectable()
export class SidebarService {

    public getActiveSidebarItem(currUrl: string[]): SidebarItem {
        var indexOfCalendar = currUrl.indexOf("calendar");
        var sidebarUrlItem: string = indexOfCalendar === currUrl.length - 1 ? sidebarUrlItem = currUrl[indexOfCalendar] : sidebarUrlItem = currUrl[indexOfCalendar + 1];


        switch (sidebarUrlItem) {
            case "":
            case "calendar": {
                return SidebarItem.Calendar;
            }
            case "notes": {
                return SidebarItem.Notes;
            }
            default:
                console.log("Active url not found in sidebar! - " + sidebarUrlItem);
                return null;
        }
    }
}