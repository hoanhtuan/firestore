import {Component} from '@angular/core';
import {AppState} from "../../_store/app.state";
import {Store} from "@ngrx/store";
import {EmailLogin} from "../../_store/auth/auth.action";
import {Observable} from "rxjs/Observable";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent{
  model: any = {user: 'test', password: 'test'};
  error$: Observable<string>;
  constructor(private store: Store<AppState>,  private spinnerService: Ng4LoadingSpinnerService) {
    this.error$ = this.store.select((state: AppState) => state.errorState.errorMessage);
  }
  onSubmit(user) {
    this.spinnerService.show();
    if (user) {
      this.store.dispatch(new EmailLogin(user));
    }
  }
}
