import { Component, OnInit } from '@angular/core';
import {AppState} from "../_store/app.state";
import {Store} from "@ngrx/store";
import {GetUser} from "../_store/auth/auth.action";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
    this.store.dispatch(new GetUser())
  }

}
