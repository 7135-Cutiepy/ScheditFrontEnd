import { Component, OnInit, Input, Output } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.css']
})
export class CreateScheduleComponent implements OnInit {
  dataRequested = 0;
  algorithmInput = {};
  

  constructor(private authService: AuthService,
    private http: HttpClient) { }

  ngOnInit() {
    this.algorithmInput['schedule'] = {};
  }
  
  requestData(){
    this.algorithmInput['email'] = this.authService.getEmail();
    console.log(this.algorithmInput);
    this.http.post("http://localhost:3000/schedule", this.algorithmInput)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
    this.dataRequested = this.dataRequested + 1;
  }

  receiveHourPrefs($event) {
    this.algorithmInput['schedule']['prefHours'] = $event;
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

  private handleError(error: HttpErrorResponse) {
    console.log(error);
  };
  
}
