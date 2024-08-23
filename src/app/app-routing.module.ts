import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { NotImplementedComponent } from './shared/components/not-implemented/not-implemented.component';
import { CalendarWrapperComponent } from './calendar/calendar-wrapper.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './shared/components/errors/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'calendar', component: CalendarWrapperComponent,
    children: [
      { path: '', component: CalendarComponent },
      { path: 'notes', component: NotImplementedComponent }
    ]
  },
  { path: 'home', component: HomepageComponent },
  { path: 'others', component: NotImplementedComponent },
  { path: 'account', loadChildren: () => import('./account/account.module').then(module => module.AccountModule) },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
