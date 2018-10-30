import { Component, OnInit } from '@angular/core';
import { NavElement } from '@hcl-ers/core-ui';
import { AuthenticationService } from '../_services/authentication-service';
import { Router } from '@angular/router';

@Component({
  selector: 'hcl-ers-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  navTitle = 'Puppy Paws Pets';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}
  // tslint:disable-next-line:no-input-rename
  navElements: Array<NavElement> = [
    { label: 'About', route: 'about' },
    { label: 'Products', route: 'products' }
  ];

  isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }

  ngOnInit() {}

  onLogin() {
    this.router.navigate(['login']);
  }

  onLogOut() {
    this.authenticationService.logout();
  }
}
