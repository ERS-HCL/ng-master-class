import { Component, OnInit } from '@angular/core';
import { LoginModel, AlertService } from '@hcl-ers/core-ui';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_services/authentication-service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'hcl-ers-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {
  loginModel: LoginModel;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onLogin($event): void {
    this.loginModel = $event;

    this.submitted = true;

    this.loading = true;
    this.authenticationService
      .login(this.loginModel.username, this.loginModel.password)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
          this.alertService.success('Sucessfully logged in!');
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
    /*     if (
      this.loginModel.username === 'admin' &&
      this.loginModel.password === 'admin'
    ) {
      this.router.navigate(['/']);
    } else {
      alert('Invalid credentials');
    } */
  }
}
