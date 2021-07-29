import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, UserToken } from '../SharedClasses/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  _urlRegister:string = "https://localhost:44353/register";
  
  _urlLogin:string = "https://localhost:44353/login";

  constructor(private http:HttpClient) { }

  enrolleUser(user:User):Observable<UserToken>
  {
    const params = new FormData();
    params.append('username' , user.userName);
    params.append('password' , user.password);
    params.append('grant_type' , user.grant_type);
    const httpOptions = {
      headers : new HttpHeaders({
        'content-type':'application/x-www-form-urlencoded',
      })
    }
    return this.http.post<UserToken>(this._urlRegister , params , httpOptions);
    // const headers = {'content-type' : 'application/json'};
    // const body = JSON.stringify(user);
    // console.log(body);
    // return this.http.post<UserToken>(this._urlRegister , body , {'headers':headers});
  }

  checkUser(user:User):Observable<UserToken>
  {
    const params = new FormData();
    params.append('username' , user.userName);
    params.append('password' , user.password);
    params.append('grant_type' , user.grant_type);
    const httpOptions = {
      headers : new HttpHeaders({
        'content-type':'application/x-www-form-urlencoded',
      })
    }
    return this.http.post<UserToken>(this._urlLogin , params , httpOptions);
    // const headers = {'content-type' : 'application/json'};
    // const body = JSON.stringify(user);
    // console.log(body);
    // return this.http.post<UserToken>(this._urlLogin , body , {'headers':headers});
  }
}
