import {Component, ViewEncapsulation} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import {SellerState} from './_store/seller/seller.state';
import {Store} from '@ngrx/store';
import {INITIAL_SELLER} from './_store/seller/seller.model';
import {EmailLogin, GetUser, Logout} from './_store/auth/auth.action';
import {AuthState} from './_store/auth/auth.state';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
  seller = INITIAL_SELLER;

  constructor(auth: AngularFireAuth, db: AngularFireDatabase, private store: Store<AuthState>) {


    //store.dispatch(new EmailLogin({email: this.seller.email, password: this.seller.password}));

    //store.dispatch(new CreateSellerAction(this.seller))
    // auth.auth.signInWithEmailAndPassword(this.seller.email, this.seller.password)
    //   .then(() => {
    //     this.seller.seller_uid = auth.auth.currentUser.uid;
    //     store.dispatch(new UpdateSellerAction(this.seller))
    //   })


  }

  login(){
    this.seller.email = 'jerry_hokh19@yaoo.com';
    this.seller.password = '123123';
    this.seller.address = 'updaaaaated';

    this.store.dispatch(new EmailLogin({email: this.seller.email, password: this.seller.password}));

  }

  logout(){
    this.store.dispatch(new Logout());
  }
}
