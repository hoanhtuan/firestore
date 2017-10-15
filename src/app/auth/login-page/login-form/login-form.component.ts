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
  @Output() login = new EventEmitter();

  constructor() {
    this.model = _.cloneDeep(this.model);
  }

  onLogin() {
    if (this.form.valid) {
      this.error = '';
      this.login.emit(this.form.value);
    }
  }
}
