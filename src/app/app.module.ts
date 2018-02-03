import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { PrefBarComponent } from './pref-bar/pref-bar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CourseSelectorComponent } from './course-selector/course-selector.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CreateScheduleComponent } from './create-schedule/create-schedule.component';

const appRoutes: Routes = [
  { path: '', component: CreateScheduleComponent },
  { path: 'catalog', component: CatalogComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PrefBarComponent,
    CalendarComponent,
    CourseSelectorComponent,
    CatalogComponent,
    CreateScheduleComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
