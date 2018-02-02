import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-selector',
  templateUrl: './course-selector.component.html',
  styleUrls: ['./course-selector.component.css']
})
export class CourseSelectorComponent implements OnInit {
  times_lower_bound = 1;
  times_upper_bound = 3;
  times = [];
  constructor() { }

  ngOnInit() {
    for (var i = this.times_lower_bound; i <= this.times_upper_bound; i++) {
      var time_string;
      if (i < 12) {
        time_string = i+":00am";
      } else {
        time_string = ((i>12) ? i-12 : i) + ":00pm";
      }
      this.times.push(time_string);
    }
  }
  
  toggle_time_slot(elem) {
    if (elem.getAttribute("available")) {
      elem.removeAttribute("available");
    } else {
      elem.setAttribute("available", true);
    }
  }

}
