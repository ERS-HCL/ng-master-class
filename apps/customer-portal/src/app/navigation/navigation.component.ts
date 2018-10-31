import { Component, OnInit } from '@angular/core';
import { NavElement } from '@hcl-ers/core-ui';
import { AuthenticationService } from '../_services/authentication-service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../+state/app.reducer';
import { appQuery } from '../+state/app.selectors';

@Component({
  selector: 'hcl-ers-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  navTitle = 'Puppy Paws Pets';
  cartItemCount: Observable<number>;
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private store: Store<AppState>
  ) {}
  // tslint:disable-next-line:no-input-rename
  navElements: Array<NavElement> = [
    { label: 'About', route: 'about' },
    { label: 'Puppies', route: '/' }
  ];

  isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }

  ngOnInit() {
    this.cartItemCount = this.store.pipe(select(appQuery.getShoppingCartCount));
  }

  onLogin() {
    this.router.navigate(['login']);
  }

  onLogOut() {
    this.authenticationService.logout();
  }
}
