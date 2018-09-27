import { Component, OnInit } from '@angular/core';
import { AppState } from './+state/app.reducer';
import { Store } from '@ngrx/store';
import { LoadApp } from './+state/app.actions';

@Component({
  selector: 'hcl-ers-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'customer-portal';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(new LoadApp());
  }
}
