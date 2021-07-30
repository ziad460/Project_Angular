import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cart } from '../SharedClasses/Cart';
import { Observable } from 'rxjs';
import { UserProducts } from '../SharedClasses/UserProdutcs';
import { ActivatedRoute } from '@angular/router';
import { analyze } from 'eslint-scope';
//import { UserLogin, User } from '../SharedClasses/User';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  _urlQuantity = "https://localhost:44353/api/Cart/";
  _urlAddCart:string = "https://localhost:44353/api/addcart/";
  _urlProductsInCart:string = "https://localhost:44353/api/cart/products/"

  constructor(private http:HttpClient , private routeActive:ActivatedRoute) { }

  addToCart(Product_ID:number ):Observable<Cart[]>
  {
    var token = localStorage.getItem("AuthenticatedUser");
      var header = new HttpHeaders();
      header.append('Content-Type' , 'application/json');
      header.append('Authorization' , `bearer ${token}`);
      const httpOptions = {headers : header};
      return this.http.post<Cart[]>(`${this._urlAddCart}${Product_ID}` , {} , httpOptions);
  }
  getProductInCart():Observable<Cart[]>
  {
    var token = localStorage.getItem("AuthenticatedUser");
      var header = new HttpHeaders();
      header.append('Content-Type' , 'application/json');
      header.append('Authorization' , `bearer ${token}`);
      const httpOptions = {headers : header};
      return this.http.get<Cart[]>(this._urlProductsInCart , httpOptions);
  }
  setQuantity(Cart_ID:number , quantity:number):Observable<Cart[]>
  {
    var token = localStorage.getItem("AuthenticatedUser");
      var header = new HttpHeaders();
      header.append('Content-Type' , 'application/json');
      header.append('Authorization' , `bearer ${token}`);
      const httpOptions = {headers : header};
      return this.http.put<Cart[]>(`${this._urlQuantity}/${Cart_ID}/${quantity}`, {} , httpOptions);
  }
}
