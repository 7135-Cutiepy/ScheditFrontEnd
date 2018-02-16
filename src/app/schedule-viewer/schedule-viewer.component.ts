import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-schedule-viewer',
  templateUrl: './schedule-viewer.component.html',
  styleUrls: ['./schedule-viewer.component.css']
})

@Injectable()
export class ScheduleViewerComponent implements OnInit {
  scheduleData;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/schedule").subscribe(data => {
      this.scheduleData = data;
      console.log(data);
    });
  }
}
