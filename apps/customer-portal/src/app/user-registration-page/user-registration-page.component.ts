import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppState, User } from '../+state/app.reducer';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appQuery } from '../+state/app.selectors';
import { UpdateUser } from '../+state/app.actions';

@Component({
  selector: 'hcl-ers-user-registration-page',
  templateUrl: './user-registration-page.component.html',
  styleUrls: ['./user-registration-page.component.scss']
})
export class UserRegistrationPageComponent implements OnInit {
  user: Observable<User>;
  constructor(private router: Router, private store: Store<AppState>) {}

  onComplete($event): void {
    this.store.dispatch(new UpdateUser($event));
  }

  ngOnInit() {
    this.user = this.store.pipe(select(appQuery.getUser));
  }
}
