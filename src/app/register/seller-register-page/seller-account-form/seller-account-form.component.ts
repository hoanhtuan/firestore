import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {INITIAL_SELLER} from '../../../_store/seller/seller.model';
import * as _ from 'lodash';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'seller-register-account-form',
  templateUrl: './seller-account-form.component.html',
  styleUrls: ['./seller-account-form.component.scss']
})
export class SellerRegisterAccountFormComponent {
  @ViewChild('f1') form: NgForm;
  @Input() model = INITIAL_SELLER;
  @Input() error = '';
  @Output() next = new EventEmitter();

  constructor() {
    this.model = _.cloneDeep(this.model);
  }

  onNext() {
    if (this.form.valid) {
      this.error = '';
      this.next.emit(_.cloneDeep(this.model));
    }
  }

}
