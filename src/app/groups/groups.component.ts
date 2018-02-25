import { Component, OnInit } from '@angular/core';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { courses } from '../coursesModule'

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})

@NgModule({
     imports: [
     	FormsModule,
     ],
     declarations: []
 })

export class GroupsComponent implements OnInit {
  courses = courses[0].courses;
  myCourses = [];

  mustTakeCourses = [];
  wantToTakeCourses = [];

  constructor() {
  }

  ngOnInit() {
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
}
