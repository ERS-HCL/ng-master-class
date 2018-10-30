import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState, ShoppingCart, User } from '../+state/app.reducer';
import { Observable } from 'rxjs';
import { appQuery } from '../+state/app.selectors';

@Component({
  selector: 'hcl-ers-check-out-page',
  templateUrl: './check-out-page.component.html',
  styleUrls: ['./check-out-page.component.css']
})
export class CheckOutPageComponent implements OnInit {
  cart: Observable<ShoppingCart>;
  user: Observable<User>;
  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit() {
    this.cart = this.store.pipe(select(appQuery.getShoppingCart));
    this.user = this.store.pipe(select(appQuery.getUser));
  }

  onPurchase($event): void {
    this.router.navigate(['/']);
  }
}
