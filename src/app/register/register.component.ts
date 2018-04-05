import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registerUser(event) {
  	event.preventDefault();
  	var username = event.target.elements[0].value;
  	var password = event.target.elements[1].value;
  }

}
