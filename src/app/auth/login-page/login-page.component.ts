import { Component, OnInit } from '@angular/core';
import {AppState} from "../../_store/app.state";
import {Store} from "@ngrx/store";
import {EmailLogin} from "../../_store/auth/auth.action";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  onSubmit(user){
    this.store.dispatch(new EmailLogin(user))
  }
}
