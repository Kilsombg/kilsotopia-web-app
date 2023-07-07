import { Component, Input } from '@angular/core';
import { Day } from './day.model';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent {
@Input() day : Day;
clicked: boolean = false;
constructor(){
}
}
