import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DndModule } from 'ng2-dnd';

import { AppComponent } from './app.component';
import { PrefBarComponent } from './pref-bar/pref-bar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CourseSelectorComponent } from './course-selector/course-selector.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CreateScheduleComponent } from './create-schedule/create-schedule.component';
import { ScheduleViewerComponent } from './schedule-viewer/schedule-viewer.component';
import { GroupsComponent } from './groups/groups.component';
import { FilterPipe } from './course-search-pipe/course-search-filter.pipe';
import { SingleScheduleViewerComponent } from './single-schedule-viewer/single-schedule-viewer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';

const appRoutes: Routes = [
  { path: '', component: CreateScheduleComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'view_schedules', component: ScheduleViewerComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'single_viewer', component: SingleScheduleViewerComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PrefBarComponent,
    CalendarComponent,
    CourseSelectorComponent,
    CatalogComponent,
    CreateScheduleComponent,
    ScheduleViewerComponent,
    GroupsComponent,
    FilterPipe,
    SingleScheduleViewerComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    DndModule.forRoot(),
  ],
  providers: [ValidateService,
              AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
