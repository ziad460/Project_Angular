import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserToken, UserRegister, UserLogin } from '../SharedClasses/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  _urlRegister:string = "https://localhost:44353/register";
  
  _urlLogin:string = "https://localhost:44353/login";

  constructor(private http:HttpClient) { }

  enrolleUser(user:UserRegister):Observable<any>
  {
    const headers = {
      'Accept':'application/json',
      'Content-Type' : 'application/json'
    };
    const body = JSON.stringify({
      'Grant_Type':'password',
      'username':user.userName,
      'password':user.password
    });
    return this.http.post<any>(this._urlRegister , body , {headers:headers});
  }

  checkUser(user:UserLogin):Observable<any>
  {
    const headers = {
      'Accept':'application/json',
      'Content-Type' : 'application/json'
    };
    const body = JSON.stringify({
      'Grant_Type':'password',
      'username':user.userName,
      'password':user.password
    });
    return this.http.post<any>(this._urlLogin , body , {headers:headers});
  }
}
