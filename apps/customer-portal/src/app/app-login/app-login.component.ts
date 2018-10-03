import { Component, OnInit } from '@angular/core';
import { LoginModel } from '@hcl-ers/core-ui';
import { Router } from '@angular/router';

@Component({
  selector: 'hcl-ers-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {
  loginModel: LoginModel;
  loading = false;
  constructor(private router: Router) {}

  ngOnInit() {}

  onLogin($event): void {
    this.loginModel = $event;
    if (
      this.loginModel.username === 'admin' &&
      this.loginModel.password === 'admin'
    ) {
      this.router.navigate(['/']);
    } else {
      alert('Invalid credentials');
    }
  }
}
