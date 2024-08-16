import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class HomepageModule { }
