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
  		"status":"generating"
  	},
  	{
  		"name":"schedule 3",
  		"status":"queued"
  	}
  ];	

  constructor() { }

  ngOnInit() {
  }

  getColor(status) {
  	switch (status) {
      case 'done':
        return "#02a71d";
      case 'generating':
        return '#CCCC00';
      case 'queued':
        return '#d34a00';
    }
  }

}
