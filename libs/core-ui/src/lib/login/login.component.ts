import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit() {}

  login(): void {
    this.OnLogin.emit(this.loginModel);
    /*  if (
      this.loginModel.username === 'admin' &&
      this.loginModel.password === 'admin'
    ) {
      this.router.navigate(['/']);
    } else {
      alert('Invalid credentials');
    } */
  }
}
