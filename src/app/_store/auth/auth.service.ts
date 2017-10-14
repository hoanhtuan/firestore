import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {Seller} from "../seller/seller.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService {

  constructor(private db: AngularFireDatabase,
              private afAuth: AngularFireAuth) {}

  createUserWithEmailAndPassword(email: string, password: string) {
    return Observable.fromPromise(this.afAuth.auth.createUserWithEmailAndPassword(email, password));
  }

  getUser() {
    return this.afAuth.authState;
  }

  signInWithEmailAndPassword(email, password) {
    return Observable.fromPromise(this.afAuth.auth.signInWithEmailAndPassword(email, password));
  }

  signOut() {
   return Observable.fromPromise(this.afAuth.auth.signOut());
  }

}

