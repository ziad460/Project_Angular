import { Component, OnInit } from '@angular/core';
import { CheckOutServiceService } from '../Services/check-out-service.service';
import { Cart } from '../SharedClasses/Cart';
import { Shipping } from '../SharedClasses/Shipping';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  Shipping:Shipping = new Shipping();
  userCartProducts:Cart [] = []
  imgSrc = "../../assets/images/Products/";
  totalPrice:number = 0;
  constructor(private chkoutservice:CheckOutServiceService) { }

  ngOnInit(): void {
    this.chkoutservice.makeOrder().subscribe( data => {
      this.userCartProducts = data ;
      for (const iterator of this.userCartProducts) {
        this.totalPrice += (iterator.Product_Price * iterator.Product_Quantity);
      }
    }) 
  }
  goShipping()
  {
    this.chkoutservice.makeCheckOut(this.Shipping).subscribe();
  }
}
