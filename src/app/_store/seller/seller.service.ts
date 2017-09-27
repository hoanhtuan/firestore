import {Injectable} from '@angular/core';
import {Seller} from './seller.model';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {AppState} from "../app.state";
import {Store} from "@ngrx/store";
import {ErrorAction} from "../shared/error/error.action";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

@Injectable()
export class SellerService {
  private basePath: string = '/sellers';
  sellers$: FirebaseListObservable<Seller[]>;
  seller$: FirebaseObjectObservable<Seller> = null;

  constructor(private store: Store<AppState>, private db: AngularFireDatabase, private auth: AngularFireAuth) {

  }

  getAll(query = {}): FirebaseListObservable<Seller[]> {
    this.sellers$ = this.db.list(this.basePath, {
      query: query
    })

    return this.sellers$;
  }

  getById(id: string): FirebaseObjectObservable<Seller> {
    const sellerPath = `${this.basePath}/${id}`;

    return this.db.object(sellerPath);
  }

  create(seller: Seller): Observable<any> {
    //seller = _.cloneDeep(seller);
    return of(this.auth.auth.createUserWithEmailAndPassword(seller.email, seller.password))
      // .then(() => {
      //   this.auth.auth.signInWithEmailAndPassword(seller.email, seller.password)
      //     .then(() => {
      //       seller.seller_uid = this.auth.auth.currentUser.uid;
      //       const sellerPath = `${this.basePath}/${seller.seller_uid}`;
      //
      //       return this.db.object(sellerPath).set(seller);
      //     })
      // })
      // .catch(error => this.handleError(error))

  }

  update(seller: Seller): any {
    const sellerPath = `${this.basePath}/${seller.seller_uid}`;
    return this.db.object(sellerPath).update(seller);
  }

  delete(key: string): void {
    this.sellers$.remove(key)
      .catch(error => this.handleError(error))
  }

  private handleError(error) {
    this.store.dispatch(new ErrorAction(error))
  }

}

