import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../+state/app.reducer';
import { Observable, AsyncSubject, BehaviorSubject } from 'rxjs';
import { appQuery } from '../+state/app.selectors';

@Injectable()
export class CartGuard implements CanActivate {
  cartItemCount: Observable<number>;
  private cartHasItems: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  constructor(private router: Router, private store: Store<AppState>) {
    this.cartItemCount = this.store.pipe(select(appQuery.getShoppingCartCount));
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.cartItemCount.subscribe(value => {
      if (value > 0) {
        this.cartHasItems.next(true);
      } else {
        this.router.navigate(['/']);
      }
    });

    return this.cartHasItems;
  }
}
