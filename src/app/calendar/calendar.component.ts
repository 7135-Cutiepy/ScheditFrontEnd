import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  message: any = 0;
  @Input() dataRequested;
  @Output() messageEvent = new EventEmitter<any>();

  times_lower_bound = 8;
  times_upper_bound = 21;
  times = [];
  timePrefs = {};

  constructor() {
  }
  
  sendInfo() {
    this.messageEvent.emit(this.message);
  }
  
  ngOnChanges(changes: SimpleChanges){
    this.message = this.getCalendarData();
    this.sendInfo();

  }

  ngOnInit() {
    for (var i = this.times_lower_bound; i <= this.times_upper_bound; i++) {
      var time_string;
      if (i < 12) {
        time_string = i+":00am";
      } else {
        time_string = ((i>12) ? i-12 : i) + ":00pm";
      }
      this.times.push(time_string);
      var dayPrefs = {};
      for (var d = 0; d < 5; d++) {
        dayPrefs[d] = "No";
      }
      this.timePrefs[time_string] = dayPrefs;
    }
  }
  
  update(time, day, state) {
    this.timePrefs[time][day] = state;
  }
  
  getCalendarData() {
    return this.timePrefs;
  }

  toggle_time_slot(elem, time, day) {
    if (elem.getAttribute("data-available") == "Never") {
        elem.setAttribute("data-available", "Med");
    } else if (elem.getAttribute("data-available") == "Low") {
        elem.setAttribute("data-available", "Med");
    } else {
        elem.setAttribute("data-available", "Never");
    }
    
    this.update(time, day, elem.getAttribute("data-available"));
  }
}
