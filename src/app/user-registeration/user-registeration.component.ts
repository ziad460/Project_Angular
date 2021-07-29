import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../Services/user-service.service';
import { User } from '../SharedClasses/User';

@Component({
  selector: 'app-user-registeration',
  templateUrl: './user-registeration.component.html',
  styleUrls: ['./user-registeration.component.scss']
})
export class UserRegisterationComponent implements OnInit {

  authUser:User = new User();
  
  constructor(private user:UserServiceService) { }

  ngOnInit(): void {
  }

  onLogin()
  {
    this.user.checkUser(this.authUser).subscribe(
      data =>
      {
        console.log(data);
      },
      error =>
      {
        console.log(error);
      })

  }
  onRegister()
  {
    this.user.enrolleUser(this.authUser).subscribe(
      data =>
      {
        console.log(data);
      },
      error =>
      {
        console.log(error);
      })
  }
}
