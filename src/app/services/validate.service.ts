import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if (user.email == undefined || user.password == undefined || user.conf_password == undefined) {
      return {success: false, msg: 'Please fill in all fields.'};
    } else {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(user.email)) {
        if (user.password == user.conf_password) {
          return {success: true, msg: 'Success. Creating account.'};
        } else {
          return {success: false, msg: 'Passwords do not match.'};
        }
      } else {
        return {success: false, msg: 'Please use a valid email.'};
      }
    }
  }

  validateLogin(user) {
    if (user.email == undefined || user.password == undefined) {
      return {success: false, msg: 'Please fill in all fields.'};
    } else {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(user.email)) {
        return {success: true, msg: 'Success. Logging in.'};
      } else {
        return {success: false, msg: 'Please enter a valid email.'};
      }
    }
  }
}
