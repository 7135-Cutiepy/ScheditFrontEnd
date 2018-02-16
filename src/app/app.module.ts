import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PrefBarComponent } from './pref-bar/pref-bar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CourseSelectorComponent } from './course-selector/course-selector.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CreateScheduleComponent } from './create-schedule/create-schedule.component';
import { ScheduleViewerComponent } from './schedule-viewer/schedule-viewer.component';

const appRoutes: Routes = [
  { path: '', component: CreateScheduleComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'view_schedules', component: ScheduleViewerComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PrefBarComponent,
    CalendarComponent,
    CourseSelectorComponent,
    CatalogComponent,
    CreateScheduleComponent,
    ScheduleViewerComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
