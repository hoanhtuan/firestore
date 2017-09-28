import {Component, OnInit} from '@angular/core';
import {INITIAL_SELLER, Seller} from "../../_store/seller/seller.model";
import {AppState} from "../../_store/app.state";
import {Store} from "@ngrx/store";
import {CreateSellerAction} from "../../_store/seller/seller.action";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-seller-register-page',
  templateUrl: './seller-register-page.component.html',
  styleUrls: ['./seller-register-page.component.scss']
})
export class SellerRegisterPageComponent implements OnInit {
  model: Seller = INITIAL_SELLER;
  error$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.error$ = this.store.select((state: AppState) => state.errorState.errorMessage);
  }

  ngOnInit() {
  }

  onSubmit(model) {
    this.store.dispatch(new CreateSellerAction(model));
  }

}
