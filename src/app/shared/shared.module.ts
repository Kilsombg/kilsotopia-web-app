import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotImplementedComponent } from './components/not-implemented/not-implemented.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { ValidationMessagesComponent } from './components/errors/validation-messages/validation-messages.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotificationComponent } from './components/modals/notification/notification.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import { HTTPService } from './services/http.service';
import { RoutingService } from './services/routing.service';
import { NavigationService } from './services/navigation.service';
import { LocationService } from './services/location.service';
import { DateHelper } from './helpers/date.helper';
import { SharedService } from './services/shared.service';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    NotImplementedComponent,
    NotFoundComponent,
    ValidationMessagesComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
  ],
  exports: [
    NotImplementedComponent,
    NotificationComponent,
    ValidationMessagesComponent,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
  ],
  providers: [
    DateHelper,
    HTTPService,
    RoutingService,
    NavigationService,
    LocationService,
    SharedService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
export class SharedModule { }