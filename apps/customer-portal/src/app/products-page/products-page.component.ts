import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState, ShoppingCart } from '../+state/app.reducer';
import { Observable } from 'rxjs';
import { appQuery } from '../+state/app.selectors';
import {
  LoadBreedImages,
  LoadSubBreedImages,
  HasSubBreeds,
  AddCartItem
} from '../+state/app.actions';
import { BreedParams } from '@hcl-ers/data-services';

@Component({
  selector: 'hcl-ers-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  breeds: Observable<Map<string, any[]>>;
  breedImages: Observable<string[]>;
  subBreedImages: Observable<string[]>;
  breedImagesLoaded: Observable<boolean>;
  subBreedImagesLoaded: Observable<boolean>;
  breedUnitPrice: Observable<number>;
  breedAvailiabilty: Observable<boolean>;
  cartItemCount: Observable<number>;
  cart: Observable<ShoppingCart>;
  isSubBreed: Observable<boolean>;
  areSubBreedsAvailable = false;
  selectedBreed: string;
  selectedSubBreed: string;
  breedParams: BreedParams;
  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit() {
    this.breeds = this.store.pipe(select(appQuery.getBreeds));
    this.breedImages = this.store.pipe(select(appQuery.getBreedImages));
    this.subBreedImages = this.store.pipe(select(appQuery.getSubBreedImages));
    this.breedUnitPrice = this.store.pipe(select(appQuery.getBreedUnitPrice));
    this.cart = this.store.pipe(select(appQuery.getShoppingCart));
    this.cartItemCount = this.store.pipe(select(appQuery.getShoppingCartCount));
    this.breedAvailiabilty = this.store.pipe(
      select(appQuery.getBreedAvailiability)
    );
    this.breedImagesLoaded = this.store.pipe(
      select(appQuery.getBreedImagesLoaded)
    );
    this.subBreedImagesLoaded = this.store.pipe(
      select(appQuery.getSubBreedImagesLoaded)
    );
    this.isSubBreed = this.store.pipe(select(appQuery.getHasSubBreed));
  }

  onBuy($event): void {
    // console.log($event);
    this.store.dispatch(
      new AddCartItem({
        id: this.selectedBreed,
        productName: this.selectedBreed,
        qty: 1,
        unitPrice: parseInt($event, 10)
      })
    );
  }

  onCheckout(): void {
    this.router.navigate(['user-registration']);
  }

  onBreedSelection($event) {
    this.selectedBreed = $event;
    this.store.dispatch(new LoadBreedImages($event));
  }

  hasSubBreed($event) {
    //   console.log($event);
    this.areSubBreedsAvailable = $event;
    this.store.dispatch(new HasSubBreeds($event));
  }

  onSubBreedSelection($event) {
    //    console.log($event);
    this.selectedSubBreed = $event;
    if (this.areSubBreedsAvailable) {
      this.breedParams = {
        breed: this.selectedBreed,
        subBreed: this.selectedSubBreed
      };
      //      console.log('Dispatching Sub Breeds');
      this.store.dispatch(new LoadSubBreedImages(this.breedParams));
    }
  }
}
