import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Cart } from '../SharedClasses/Cart';
import { Shipping } from '../SharedClasses/Shipping';

@Injectable({
  providedIn: 'root'
})
export class CheckOutServiceService {

  _urlMakeOrder:string = "https://localhost:44353/api/makeorder";
  _urlCheckout:string = "https://localhost:44353/api/makeshipping";

  constructor(private http:HttpClient , private routeActive:ActivatedRoute) { }

  makeOrder():Observable<Cart[]>
  {
    var token = localStorage.getItem("AuthenticatedUser");
    var header = new HttpHeaders();
    header.append('Content-Type' , 'application/json');
    header.append('Authorization' , `bearer ${token}`);
    const httpOptions = {headers : header};
    return this.http.post<Cart[]>(this._urlMakeOrder,{} , httpOptions);
  }

  makeCheckOut(shipping:Shipping)
  {
    var token = localStorage.getItem("AuthenticatedUser");
    var header = new HttpHeaders();
    header.append('Content-Type' , 'application/json');
    header.append('Authorization' , `bearer ${token}`);
    const httpOptions = {headers : header};
    return this.http.post(this._urlCheckout , shipping , httpOptions);
  }
}
