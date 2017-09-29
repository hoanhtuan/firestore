import {Component} from '@angular/core';
import {AppState} from "../../_store/app.state";
import {Store} from "@ngrx/store";
import {EmailLogin} from "../../_store/auth/auth.action";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent{
  model: any = {user: 'test', password: 'test'};
  error$: Observable<string>;
  constructor(private store: Store<AppState>) {
    this.error$ = this.store.select((state: AppState) => state.errorState.errorMessage);
  }
  onSubmit(user) {
    if (user) {
      this.store.dispatch(new EmailLogin(user));
    }
  }
}
