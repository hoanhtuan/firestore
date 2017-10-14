import {Injectable} from '@angular/core';
import {Seller} from './seller.model';
import {AngularFireAuth} from 'angularfire2/auth';
import {AppState} from "../app.state";
import {Store} from "@ngrx/store";
import {ErrorAction} from "../shared/error/error.action";
import {Observable} from "rxjs/Observable";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";

@Injectable()
export class SellerService {
  private sellers: string = 'sellers';
  seller$: AngularFirestoreDocument<Seller> = null;

  constructor(private store: Store<AppState>, private afs : AngularFirestore, private auth: AngularFireAuth) {

  }

  getAll() : Observable<Seller[]> {
    return this.afs.collection(this.sellers).valueChanges();
  }

  getById(id: string): AngularFirestoreDocument<Seller> {
    const sellerPath = `${this.sellers}/${id}`;

    return this.afs.doc(sellerPath);
  }

  create(id: string, seller: Seller): any {
    return Observable.fromPromise(this.afs.collection(this.sellers).doc(id).set(seller));
  }

  update(seller: Seller): any {
    const sellerPath = `${this.sellers}/${seller.seller_uid}`;
    return this.afs.doc(sellerPath).update(seller);
  }

  delete(key: string): void {
    // this.sellers$.(key)
    //   .catch(error => this.handleError(error))
  }

  private handleError(error) {
    this.store.dispatch(new ErrorAction(error))
  }

}

