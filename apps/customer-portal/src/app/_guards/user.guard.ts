import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState, User } from '../+state/app.reducer';
import { Observable, AsyncSubject, BehaviorSubject } from 'rxjs';
import { appQuery } from '../+state/app.selectors';

@Injectable()
export class UserGuard implements CanActivate {
  user: Observable<User>;
  private userRegistered: BehaviorSubject<boolean> = new BehaviorSubject<
    boolean
  >(false);
  constructor(private router: Router, private store: Store<AppState>) {
    this.user = this.store.pipe(select(appQuery.getUser));
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.user.subscribe(value => {
      if (value && value.name.length > 0 && value.address.length > 0) {
        this.userRegistered.next(true);
      } else {
        this.router.navigate(['/user-registration']);
      }
    });

    return this.userRegistered;
  }
}
