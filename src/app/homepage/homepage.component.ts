import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  schedules = [
  	{
  		"name":"schedule 1",
  		"status":"done"
  	},
  	{
  		"name":"schedule 2",
  		"status":"building..."
  	},
  	{
  		"name":"schedule 3",
  		"status":"waiting..."
  	}
  ];	

  constructor() { }

  ngOnInit() {
  }

  getColor(status) {
  	switch (status) {
      case 'done':
        return "#02a71d";
      case 'building...':
        return '#CCCC00';
      case 'waiting...':
        return '#d34a00';
    }
  }

}
