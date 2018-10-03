import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

export class LoginModel {
  constructor(public username: string = '', public password: string = '') {}
}

@Component({
  selector: 'hcl-ers-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  color = 'primary';
  diameter = 30;
  value = 50;
  loginModel: LoginModel = new LoginModel();
  hide = true;
  @Input() loading = false;
  @Output() OnLogin = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  login(): void {
    this.OnLogin.emit(this.loginModel);
  }
}
