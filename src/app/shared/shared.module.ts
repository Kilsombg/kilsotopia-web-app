import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotImplementedComponent } from './components/not-implemented/not-implemented.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { ValidationMessagesComponent } from './components/errors/validation-messages/validation-messages.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NotImplementedComponent,
    NotFoundComponent,
    ValidationMessagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NotImplementedComponent,
    RouterModule
  ]
})
export class SharedModule { }