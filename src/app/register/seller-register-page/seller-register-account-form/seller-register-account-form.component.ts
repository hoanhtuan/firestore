import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {INITIAL_SELLER, Seller} from '../../../_store/seller/seller.model';
import * as _ from 'lodash';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'seller-register-account-form',
  templateUrl: './seller-register-account-form.component.html',
  styleUrls: ['./seller-register-account-form.component.scss']
})
export class SellerRegisterAccountFormComponent {
  @ViewChild('f') form: NgForm;
  @Input() model = INITIAL_SELLER;
  @Input() error = '';
  @Output() submit = new EventEmitter();

  constructor() {
    this.model = _.cloneDeep(this.model);
  }

  onSubmit() {
    if (this.form.valid) {
      this.submit.emit(this.model);
    }
  }

}
