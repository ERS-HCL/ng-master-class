import { Action } from '@ngrx/store';
import { Entity } from './app.reducer';
import { BreedParams } from '@hcl-ers/data-services';

export enum AppActionTypes {
  LoadApp = '[App] Load App',
  AppLoaded = '[App] App Loaded',
  LoadBreedImages = '[App] Load Breed Images',
  BreedImagesLoaded = '[App] Breed Images Loaded',
  HasSubBreeds = '[App] Has Sub Breeds',
  LoadSubBreedImages = '[App] Load Sub Breed Images',
  SubBreedImagesLoaded = '[App] Sub Breed Images Loaded',
  SetSubBreedStatus = '[App] Set Sub Breed Status',
  AppLoadError = '[App] App Load Error'
}

export class LoadApp implements Action {
  readonly type = AppActionTypes.LoadApp;
}

export class AppLoadError implements Action {
  readonly type = AppActionTypes.AppLoadError;
  constructor(public payload: any) {}
}

export class HasSubBreeds implements Action {
  readonly type = AppActionTypes.HasSubBreeds;
  constructor(public payload: boolean) {}
}

export class AppLoaded implements Action {
  readonly type = AppActionTypes.AppLoaded;
  constructor(public payload: Map<string, any[]>) {
    console.log('App loaded called ! with payload:' + payload);
  }
}

export class LoadBreedImages implements Action {
  readonly type = AppActionTypes.LoadBreedImages;
  constructor(public payload: string) {}
}

export class BreedImagesLoaded implements Action {
  readonly type = AppActionTypes.BreedImagesLoaded;
  constructor(public payload: string[]) {}
}

export class LoadSubBreedImages implements Action {
  readonly type = AppActionTypes.LoadSubBreedImages;
  constructor(public payload: BreedParams) {}
}

export class SubBreedImagesLoaded implements Action {
  readonly type = AppActionTypes.SubBreedImagesLoaded;
  constructor(public payload: string[]) {}
}

export type AppAction =
  | LoadApp
  | AppLoaded
  | AppLoadError
  | LoadBreedImages
  | HasSubBreeds
  | BreedImagesLoaded
  | LoadSubBreedImages
  | SubBreedImagesLoaded;

export const fromAppActions = {
  LoadApp,
  AppLoaded,
  AppLoadError,
  HasSubBreeds,
  LoadBreedImages,
  BreedImagesLoaded,
  LoadSubBreedImages,
  SubBreedImagesLoaded
};
