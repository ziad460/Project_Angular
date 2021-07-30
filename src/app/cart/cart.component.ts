import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartServiceService } from '../Services/cart-service.service';
import { Cart } from '../SharedClasses/Cart';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  errorMsg:string ="";
  changedQuantity:number = 1;
  CartAdded:Cart[] = [];
  totalPrice:number = 0;
  imgSrc = "../../assets/images/Products/";
  cartID:any;

  constructor(private routActive:ActivatedRoute , private cart:CartServiceService , private router:Router) { }

  ngOnInit(): void {
    this.cartID = this.routActive.snapshot.paramMap.get("product_ID");
    if(this.cartID != null)
    {
      this.cart.addToCart(this.cartID).subscribe( data => {
        this.CartAdded = data;
        for (const iterator of data) {
          this.totalPrice += (iterator.Product_Price*iterator.Product_Quantity);
        }
      })
    }
    else
    {
      this.cart.getProductInCart().subscribe(data => {
        this.CartAdded = data;
        for (const iterator of data) {
          this.totalPrice += (iterator.Product_Price*iterator.Product_Quantity);
        }
      })
    }
  }
  goToProductDetails(Product_ID:number)
  {
    this.router.navigate(['/productdetails' , Product_ID]);
  }
  deleteProductFromCart(Product_ID:number)
  {

  }
  chgQuantity(Cart_ID:number)
  {
    this.cart.setQuantity(Cart_ID , this.changedQuantity).subscribe( data => {
      this.CartAdded = data;
    } , 
    error =>{
      this.errorMsg = error;
    })
  }

  checkOut()
  {
    this.router.navigate(['/checkout']);
  }
}
