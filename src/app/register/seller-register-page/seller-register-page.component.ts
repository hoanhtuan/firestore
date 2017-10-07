import {Component, OnInit} from '@angular/core';
import {INITIAL_SELLER, Seller} from "../../_store/seller/seller.model";
import {AppState} from "../../_store/app.state";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {ActivatedRoute, Params, Router} from "@angular/router";
import * as _ from 'lodash';
import {CreateSellerAction} from "../../_store/seller/seller.action";

@Component({
  selector: 'app-seller-register-page',
  templateUrl: './seller-register-page.component.html',
  styleUrls: ['./seller-register-page.component.scss']
})
export class SellerRegisterPageComponent implements OnInit {
  currentPage: string = '';
  isAccountFilledUp: boolean;
  isContactFilledUp: boolean;

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
      // redirect user to first step if jumping directly to later steps
      switch (this.currentPage){
        case 'contact': {
          if(!this.isAccountFilledUp){
            this.router.navigate(['seller_register/account'])
          }
          break;
        }

        case 'additional_information': {
          if(!this.isContactFilledUp){
            this.router.navigate(['seller_register/account'])
          }
          break;
        }
      }
    })
  }

  onNext(model) {
    //combine data from steps as 1 model then will be used to save
    this.model = Object.assign(this.model, _.cloneDeep(model));
    switch (this.currentPage){
      case 'account': {
        this.isAccountFilledUp = true
        return this.router.navigate(['seller_register/contact']);
      }
      case 'contact': {
        this.isContactFilledUp = true;
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
    this.store.dispatch(new CreateSellerAction(_.cloneDeep(this.model)));
  }

}
