import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {INITIAL_SELLER} from "../../../_store/seller/seller.model";
import * as _ from 'lodash';

@Component({
  selector: 'seller-register-contact-form',
  templateUrl: './seller-contact-form.component.html',
  styleUrls: ['./seller-contact-form.component.scss']
})
export class SellerRegisterContactFormComponent implements OnInit {

  @ViewChild('f') form: NgForm;
  @Input() model = INITIAL_SELLER;
  @Input() error = '';
  @Output() submit = new EventEmitter();
  @Output() back = new EventEmitter();

  constructor() {
    this.model = _.cloneDeep(this.model);
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      this.error = '';
      this.submit.emit(_.cloneDeep(this.model));
    }
  }

  onBack() {
    this.back.emit();
  }

}
