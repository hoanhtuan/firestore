import {Component, OnInit} from '@angular/core';
import {INITIAL_SELLER, Seller} from "../../_store/seller/seller.model";
import {AppState} from "../../_store/app.state";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-seller-register-page',
  templateUrl: './seller-register-page.component.html',
  styleUrls: ['./seller-register-page.component.scss']
})
export class SellerRegisterPageComponent implements OnInit {
  currentPage: string = '';
  model: Seller = INITIAL_SELLER;
  error$: Observable<string>;

  constructor(private store: Store<AppState>,
              private route: ActivatedRoute,
              private router: Router
              ) {
    this.error$ = this.store.select((state: AppState) => state.errorState.errorMessage);
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.currentPage = params['partialInfo'];
    })
  }

  onSubmit(model) {
    console.log(' onSubmit MODEL: ', this.model);
    this.model = Object.assign(this.model, model);
    switch (this.currentPage){
      case 'account': {
        return this.router.navigate(['seller_register/contact']);
      }
      case 'contact': {
        return this.router.navigate(['seller_register/additional_information'])
      }
    }
  }

  onBack(){
    switch (this.currentPage){
      case 'contact': {
        return this.router.navigate(['seller_register/account']);
      }
      case 'additional_information': {
        return this.router.navigate(['seller_register/contact'])
      }
    }
  }

  onSave() {
    console.log('MODEL: ', this.model);
    //this.store.dispatch(new CreateSellerAction(this.model));
  }
}
