import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../_store/app.state";
import {Observable} from "rxjs/Observable";
import {GetUser, Logout} from "../../../_store/auth/auth.action";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{
  uid$: Observable<string>;
  constructor(private store: Store<AppState>) {
    this.uid$ = this.store.select((state: AppState) => state.authState.uid)
  }

  ngOnInit(){
    //this.store.dispatch(new GetUser());
  }

  logout(){
    this.store.dispatch(new Logout);
  }
}
