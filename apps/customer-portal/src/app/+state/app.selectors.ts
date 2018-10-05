import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.reducer';

// Lookup the 'App' feature state managed by NgRx
const getAppState = createFeatureSelector<AppState>('app');

const getLoaded = createSelector(
  getAppState,
  (state: AppState) => state.loaded
);

const getBreedImagesLoaded = createSelector(
  getAppState,
  (state: AppState) => state.breedImagesLoaded
);

const getError = createSelector(getAppState, (state: AppState) => state.error);

const getBreeds = createSelector(
  getAppState,
  getLoaded,
  (state: AppState, isLoaded) => {
    return isLoaded ? state.breeds : undefined;
  }
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

export const appQuery = {
  getLoaded,
  getError,
  getBreeds,
  getBreedImagesLoaded,
  getBreedImages,
  getSelectedApp
};
