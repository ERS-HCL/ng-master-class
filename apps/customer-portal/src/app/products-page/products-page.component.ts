import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../+state/app.reducer';
import { Observable } from 'rxjs';
import { appQuery } from '../+state/app.selectors';
import {
  LoadBreedImages,
  LoadSubBreedImages,
  HasSubBreeds
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
    this.breedImagesLoaded = this.store.pipe(
      select(appQuery.getBreedImagesLoaded)
    );
    this.subBreedImagesLoaded = this.store.pipe(
      select(appQuery.getSubBreedImagesLoaded)
    );
    this.isSubBreed = this.store.pipe(select(appQuery.getHasSubBreed));
  }

  onBuy($event): void {
    this.router.navigate(['user-registration']);
  }

  onBreedSelection($event) {
    console.log($event);
    this.selectedBreed = $event;
    this.store.dispatch(new LoadBreedImages($event));
  }

  hasSubBreed($event) {
    console.log($event);
    this.areSubBreedsAvailable = $event;
    this.store.dispatch(new HasSubBreeds($event));
  }

  onSubBreedSelection($event) {
    console.log($event);
    this.selectedSubBreed = $event;
    if (this.areSubBreedsAvailable) {
      this.breedParams = {
        breed: this.selectedBreed,
        subBreed: this.selectedSubBreed
      };
      console.log('Dispatching Sub Breeds');
      this.store.dispatch(new LoadSubBreedImages(this.breedParams));
    }
  }
}
