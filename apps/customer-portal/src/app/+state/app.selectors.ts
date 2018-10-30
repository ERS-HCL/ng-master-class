import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.reducer';

// Lookup the 'App' feature state managed by NgRx
const getAppState = createFeatureSelector<AppState>('app');

const getLoaded = createSelector(
  getAppState,
  (state: AppState) => state.loaded
);

const getHasSubBreed = createSelector(
  getAppState,
  (state: AppState) => state.hasSubBreed
);

const getBreedImagesLoaded = createSelector(
  getAppState,
  (state: AppState) => state.breedImagesLoaded
);

const getSubBreedImagesLoaded = createSelector(
  getAppState,
  (state: AppState) => state.subBreedImagesLoaded
);

const getError = createSelector(getAppState, (state: AppState) => state.error);

const getBreeds = createSelector(
  getAppState,
  getLoaded,
  (state: AppState, isLoaded) => {
    return isLoaded ? state.breeds : undefined;
  }
);

const getSubBreedImages = createSelector(
  getAppState,
  getSubBreedImagesLoaded,
  (state: AppState, isLoaded) => {
    return isLoaded ? state.subBreedImages : undefined;
  }
);

const getBreedUnitPrice = createSelector(
  getAppState,
  (state: AppState) => state.breedUnitPrice
);

const getBreedAvailiability = createSelector(
  getAppState,
  (state: AppState) => state.breedAvailability
);

const getBreedImages = createSelector(
  getAppState,
  getBreedImagesLoaded,
  (state: AppState, isLoaded) => {
    return isLoaded ? state.breedImages : undefined;
  }
);

const getSelectedId = createSelector(
  getAppState,
  (state: AppState) => state.selectedId
);

const getSelectedApp = createSelector(getBreeds, getSelectedId, (app, id) => {
  const result = app ? app.get(id) : undefined; //.find(it => it['id'] === id);
  return result ? Object.assign({}, result) : undefined;
});

const getShoppingCart = createSelector(
  getAppState,
  (state: AppState) => state.cart
);

const getShoppingCartCount = createSelector(
  getAppState,
  (state: AppState) => (state.cart.lineItems ? state.cart.lineItems.length : 0)
);

export const appQuery = {
  getLoaded,
  getError,
  getBreeds,
  getHasSubBreed,
  getBreedImagesLoaded,
  getSubBreedImagesLoaded,
  getSubBreedImages,
  getBreedImages,
  getBreedUnitPrice,
  getBreedAvailiability,
  getSelectedApp,
  getShoppingCart,
  getShoppingCartCount
};
