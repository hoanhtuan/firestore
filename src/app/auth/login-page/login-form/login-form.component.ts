import {Component, Input, Output, ViewChild, EventEmitter} from '@angular/core';
import {NgForm} from "@angular/forms";
import * as _ from 'lodash';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  @ViewChild('f') form: NgForm;
  @Input() model: any = {user:'', password:''};
  @Input() error = '';
  @Output() submit = new EventEmitter();

  constructor() {
    this.model = _.cloneDeep(this.model);
  }

  onSubmit() {
    if (this.form.valid) {
      this.error = '';
      this.submit.emit(this.form.value);
    }
  }
}
