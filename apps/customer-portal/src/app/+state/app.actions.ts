import { Action } from '@ngrx/store';
import { Entity } from './app.reducer';

export enum AppActionTypes {
  LoadApp = '[App] Load App',
  AppLoaded = '[App] App Loaded',
  AppLoadError = '[App] App Load Error'
}

export class LoadApp implements Action {
  readonly type = AppActionTypes.LoadApp;
}

export class AppLoadError implements Action {
  readonly type = AppActionTypes.AppLoadError;
  constructor(public payload: any) {}
}

export class AppLoaded implements Action {
  readonly type = AppActionTypes.AppLoaded;
  constructor(public payload: Map<string, any[]>) {
    //  console.log(payload.breeds);
    console.log('App loaded called ! with payload:' + payload);
  }
}

export type AppAction = LoadApp | AppLoaded | AppLoadError;

export const fromAppActions = {
  LoadApp,
  AppLoaded,
  AppLoadError
};
