import {Injectable} from '@angular/core';
import {Seller} from './seller.model';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import * as _ from 'lodash';

@Injectable()
export class SellerService {
  private basePath: string = '/sellers';
  sellers$: FirebaseListObservable<Seller[]>;
  seller$: FirebaseObjectObservable<Seller> = null;

  constructor(private db: AngularFireDatabase, private auth: AngularFireAuth) {

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

  create(seller: Seller): any {
    seller = _.cloneDeep(seller);
    this.auth.auth.createUserWithEmailAndPassword(seller.email, seller.password)
      .then(() => {
        this.auth.auth.signInWithEmailAndPassword(seller.email, seller.password)
          .then(() => {
            seller.seller_uid = this.auth.auth.currentUser.uid;
            const sellerPath = `${this.basePath}/${seller.seller_uid}`;

            return this.db.object(sellerPath).set(seller);
          })
      })
      .catch(error => this.handleError(error))
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
    console.log(error)
  }

}

