import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { AppRoutingModule } from '../app-routing.module';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule
  ]
})
export class HomepageModule { }
