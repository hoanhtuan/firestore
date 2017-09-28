import { Component, OnInit } from '@angular/core';
import {AppState} from "../../_store/app.state";
import {Store} from "@ngrx/store";
import {EmailLogin} from "../../_store/auth/auth.action";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  error$: Observable<string>;
  constructor(private store: Store<AppState>) {
    this.error$ = this.store.select((state: AppState) => state.errorState.errorMessage);
  }

  ngOnInit() {
  }

  onSubmit(user){
    this.store.dispatch(new EmailLogin(user))
  }
}
