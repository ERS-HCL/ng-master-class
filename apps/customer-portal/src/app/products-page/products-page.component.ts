import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../+state/app.reducer';
import { Observable } from 'rxjs';
import { appQuery } from '../+state/app.selectors';

@Component({
  selector: 'hcl-ers-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  breeds: Observable<Map<string, any[]>>;
  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit() {
    this.breeds = this.store.pipe(select(appQuery.getBreeds));
  }

  onBuy($event): void {
    this.router.navigate(['user-registration']);
  }
}
