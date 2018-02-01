import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PrefBarComponent } from './pref-bar/pref-bar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CourseSelectorComponent } from './course-selector/course-selector.component';


@NgModule({
  declarations: [
    AppComponent,
    PrefBarComponent,
    CalendarComponent,
    CourseSelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
