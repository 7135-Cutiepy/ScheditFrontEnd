import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { courses } from '../coursesModule'

import { CourseApiService } from '../course-api.service';
import { ISections } from '../ISections';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
  providers: [CourseApiService]
})

@NgModule({
     imports: [
     	FormsModule,
     ],
     declarations: []
 })

export class GroupsComponent implements OnInit {
  message: any = 0;
  @Input() dataRequested;
  @Output() messageEvent = new EventEmitter<any>();
    
  courses = courses[0].courses;
  myCourses = [];
  groups = {};
  mustTake = {};
  wantToTake = {};
  
  
  mustTakeCourses = [];
  wantToTakeCourses = [];

  _sectionsArray: ISections[];

  constructor(private courseApiService: CourseApiService) {
  }

  ngOnInit() {
    this.getSections();
  }
  
  ngOnChanges(changes: SimpleChanges){
    this.message = this.getGroups();
    this.messageEvent.emit(this.message);
  }
  
  getGroups() {
    this.mustTake['courses'] = this.mustTakeCourses;
    this.mustTake['maxCourses'] = -1;
    this.mustTake['minCourses'] = -1;
    this.mustTake['minHours'] = -1;
    this.mustTake['maxHours'] = -1;
    this.mustTake['priority'] = "Must";
    this.wantToTake['courses'] = this.wantToTakeCourses;
    this.wantToTake['maxCourses'] = -1;
    this.wantToTake['minCourses'] = -1;
    this.wantToTake['minHours'] = -1;
    this.wantToTake['maxHours'] = -1;
    this.wantToTake['priority'] = "Med";
    this.groups['mustTake'] = this.mustTake;
    this.groups['wantToTake'] = this.wantToTake;
    return this.groups;
  }

  courseDragged($event: any) {
    let courseDragged: JSON = $event.dragData;
  }

  addToMyCourses($event: any) {
    var course = $event.dragData;

    var notDuplicate = this.myCourses.every(function(val) {
      return val != course;
    });

    if (notDuplicate) {
      this.myCourses.push(course);
    }
  }

  addToMustTakeGroup(course) {

    var notDuplicate = this.mustTakeCourses.every(function(val) {
      return val != course;
    });

    if (notDuplicate) {
      this.mustTakeCourses.push(course);
    }
  }

  addToWantToTakeGroup(course) {
    var notDuplicate = this.wantToTakeCourses.every(function(val) {
      return val != course;
    });

    if (notDuplicate) {
      this.wantToTakeCourses.push(course);
    }
  }

  getSections() {
    this.courseApiService.getSections()
      .subscribe(
        resultArray => this._sectionsArray = resultArray,
        error => console.log('Error :: ' + error)
      )
  }
}
