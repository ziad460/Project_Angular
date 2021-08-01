import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    const header = new HttpHeaders({
      "Content-type": "application/json"
    });
    const body = 'grant_type=password&username='+user.userName+'&password='+user.password;
    return this.http.post<any>(this._urlRegister , body , {headers:header});
  }

  checkUser(user:UserLogin):Observable<any>
  {
    const header = new HttpHeaders({
      "Content-type": "application/json"
    });
    const body = 'grant_type=password&username='+user.userName+'&password='+user.password;
    return this.http.post<any>(this._urlLogin , body , {headers:header});
  }
}
