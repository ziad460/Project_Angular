import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../Services/user-service.service';
import { UserLogin, UserRegister } from '../SharedClasses/User';

@Component({
  selector: 'app-user-registeration',
  templateUrl: './user-registeration.component.html',
  styleUrls: ['./user-registeration.component.scss']
})
export class UserRegisterationComponent implements OnInit {

  authUserLogin:UserLogin = new UserLogin();
  authUserRegister:UserRegister = new UserRegister();
  
  constructor(private user:UserServiceService) { }

  ngOnInit(): void {
  }

  onLogin()
  {
    this.user.checkUser(this.authUserLogin).subscribe(
      data =>
      {
        localStorage.setItem("AuthenticatedUser" , data.access_token);
      })
  }
  onRegister()
  {
    this.user.enrolleUser(this.authUserRegister).subscribe(
      data =>
      {
        localStorage.setItem("AuthenticatedUser" , data.access_token);
      })
  }
}
