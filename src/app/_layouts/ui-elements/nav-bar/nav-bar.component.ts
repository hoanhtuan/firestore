import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../_store/app.state";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isAuthenticated: boolean;
  uid$: Observable<string>;
  constructor(private store: Store<AppState>) {
    this.uid$ = this.store.select((state: AppState) => state.authState.currentUser)
  }

  ngOnInit() {

  }

}
