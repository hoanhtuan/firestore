import { Component, OnInit } from '@angular/core';
import {INITIAL_SELLER, Seller} from "../../_store/seller/seller.model";

@Component({
  selector: 'app-seller-register-page',
  templateUrl: './seller-register-page.component.html',
  styleUrls: ['./seller-register-page.component.scss']
})
export class SellerRegisterPageComponent implements OnInit {
  model: Seller = INITIAL_SELLER;

  constructor() {
    this.model.first_name = 'test choi ';
  }

  ngOnInit() {
  }

  onSubmit(seller){
    console.log('Seller: ', seller);
  }

}
