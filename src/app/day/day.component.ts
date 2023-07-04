import { Component, Input } from '@angular/core';
import { DayService } from './day.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent {
@Input() day : Date;
clicked: boolean = false;
constructor(dayService: DayService){
}

onSelectItem()
}
