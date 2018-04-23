import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  schedules;

  constructor(private http: HttpClient,
    private authService: AuthService) { }

  ngOnInit() {

    this.http.get('http://localhost:3000/schedule/user/' + this.authService.getEmail())
      .subscribe(data => {
        console.log(data);
        this.schedules = data;
      });;

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
