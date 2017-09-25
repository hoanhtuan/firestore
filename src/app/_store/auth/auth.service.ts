import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class AuthService {

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {

  }

  getUser(){
    return this.afAuth.authState;
  }

  signInWithEmailAndPassword(email, password){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signOut(){
    this.afAuth.auth.signOut();
  }

  private handleError(error) {
    console.log(error)
  }

}

