import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {INITIAL_SELLER} from "../../../_store/seller/seller.model";
import {NgForm} from "@angular/forms";
import * as _ from 'lodash';

@Component({
  selector: 'seller-additional-information-form',
  templateUrl: './seller-additional-information-form.component.html',
  styleUrls: ['./seller-additional-information-form.component.scss']
})
export class SellerAdditionalInformationFormComponent implements OnInit {

  @ViewChild('f3') form: NgForm;
  @Input() model = INITIAL_SELLER;
  @Input() error = '';
  @Output() save = new EventEmitter();
  @Output() back = new EventEmitter();

  constructor() {
    this.model = _.cloneDeep(this.model);
  }

  ngOnInit(){

  }

  onSave() {
    if (this.form.valid) {
      this.error = '';
      this.save.emit(_.cloneDeep(this.model));
    }
  }

  onBack() {
    this.back.emit();
  }


}
