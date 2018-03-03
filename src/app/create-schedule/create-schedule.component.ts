import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.css']
})
export class CreateScheduleComponent implements OnInit {
  dataRequested = 0;
  algorithmInput = {};
  

  constructor() { }

  ngOnInit() {
    this.algorithmInput['schedule'] = {};
  }
  
  requestData(){
    console.log(this.algorithmInput);
    this.dataRequested = this.dataRequested + 1;
  }

  receiveHourPrefs($event) {
    this.algorithmInput['schedule']['prefHours'] = $event;
    console.log(this.algorithmInput);
  }
  
  receiveCalendarData($event) {
    this.algorithmInput['cal'] = $event;
  }
  
  receiveGroups($event) {
    this.algorithmInput['schedule']['groups'] = $event;
  }
  
  getAlgorithmInput() {
    return this.algorithmInput
  }
}
