import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export class LoginModel {
  constructor(public username: string = '', public password: string = '') {}
}

@Component({
  selector: 'hcl-ers-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginModel: LoginModel = new LoginModel();
  hide = true;
  @Output() OnLogin = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  login(): void {
    this.OnLogin.emit(this.loginModel);
  }
}
