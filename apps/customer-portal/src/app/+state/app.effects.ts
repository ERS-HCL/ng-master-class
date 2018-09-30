import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { Action } from '@ngrx/store';
import { AppState } from './app.reducer';
import {
  LoadApp,
  AppLoaded,
  AppLoadError,
  AppActionTypes
} from './app.actions';
import { DogService, Breeds } from '@hcl-ers/data-services';
import { Subject, AsyncSubject, BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<AppState>,
    private _dogService: DogService
  ) {}

  @Effect()
  loadApp$: Observable<Action> = this.actions$.pipe(
    ofType(AppActionTypes.LoadApp),
    mergeMap(() =>
      this._dogService
        .getBreeds()
        .pipe(
          map(
            (res: any) => new AppLoaded({ breeds: res.message }),
            catchError(error => of(new AppLoadError(error)))
          )
        )
    )
  );

  /*   @Effect()
  loadApp$ = this.dataPersistence.fetch(AppActionTypes.LoadApp, {
    run: (action: LoadApp, state: AppState) => {
      return this._dogService.getBreeds().pipe(
        map((res: any) => {
          return new AppLoaded({ breeds: res.message });
        })
      );
    },
    onError: (action: LoadApp, error) => {
      console.error('Error', error);
      return new AppLoadError(error);
    }
  }); */
}
