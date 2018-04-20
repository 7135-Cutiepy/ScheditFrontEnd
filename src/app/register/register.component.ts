import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../services/validate.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: String;
  password: String;
  conf_password: String;
  
  alert_type = "";
  alert_text = "";

  constructor(private validateService: ValidateService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    var user = {
      email: this.email,
      password: this.password,
      conf_password: this.conf_password
    };

    var res = this.validateService.validateRegister(user);

    if (!res.success) {
      this.alert_type = "failure";
      this.alert_text = res.msg;
    } else {
      this.authService.registerUser(user).subscribe(data => {
        if (data['success']) {
          this.router.navigateByUrl('/');
        }
      });
    }
  }
}
