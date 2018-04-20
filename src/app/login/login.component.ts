import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ValidateService } from '../services/validate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email;
  password;
  
  alert_type = "";
  alert_text = "";

  constructor(private router: Router,
              private authService: AuthService,
              private validateService: ValidateService) { }

  ngOnInit() {
  }

  loginUser() {
    var user = {
      email: this.email,
      password: this.password
    };
    console.log(user);
    var res = this.validateService.validateLogin(user);

    if (!res.success) {
      this.alert_type = "failure";
      this.alert_text = res.msg;
    } else {
      this.authService.authenticateUser(user).subscribe(data=>{
        console.log(data);

        if (data['success']) {
          this.authService.storeUserData(data['token'], data['user']);
          this.router.navigate(['overview']);
        } else {
          this.alert_type = 'failure';
          this.alert_text = data['msg'];
        }
      });
    }
    

  }

  goToRegisterPage() {
  	this.router.navigate(['register']);
  }

}
