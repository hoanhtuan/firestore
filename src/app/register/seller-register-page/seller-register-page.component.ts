import {Component, OnInit} from '@angular/core';
import {INITIAL_SELLER, Seller} from "../../_store/seller/seller.model";
import {AppState} from "../../_store/app.state";
import {Store} from "@ngrx/store";
import {CreateSellerAction} from "../../_store/seller/seller.action";
import {Observable} from "rxjs/Observable";
import {ActivatedRoute, Params} from "@angular/router";

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
              private router: ActivatedRoute
              ) {
    this.error$ = this.store.select((state: AppState) => state.errorState.errorMessage);
  }

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      this.currentPage = params['partialInfo'];
    })
  }

  onSubmit(model) {
    this.store.dispatch(new CreateSellerAction(model));
  }

}
