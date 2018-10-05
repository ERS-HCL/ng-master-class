import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { Action } from '@ngrx/store';
import { AppState } from './app.reducer';
import {
  LoadApp,
  AppLoaded,
  AppLoadError,
  AppActionTypes,
  BreedImagesLoaded,
  SubBreedImagesLoaded
} from './app.actions';
import { DogService } from '@hcl-ers/data-services';
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
      this._dogService.getBreeds().pipe(
        map((res: any) => res.message),
        map((res: any) => new AppLoaded(res)),
        catchError(error => of(new AppLoadError(error)))
      )
    )
  );

  @Effect()
  loadBreedImages$: Observable<Action> = this.actions$.pipe(
    ofType(AppActionTypes.LoadBreedImages),
    mergeMap((action: any) =>
      this._dogService.getBreedImagesByType(action.payload).pipe(
        map((res: any) => res.message),
        map((res: any[]) => res.slice(0, Math.min(res.length, 5))),
        map((res: any[]) => new BreedImagesLoaded(res)),
        catchError(error => of(new AppLoadError(error)))
      )
    )
  );

  @Effect()
  loadSubBreedImages$: Observable<Action> = this.actions$.pipe(
    ofType(AppActionTypes.LoadSubBreedImages),
    mergeMap((action: any) =>
      this._dogService.getSubBreedImagesByType(action.payload).pipe(
        map((res: any) => res.message),
        map((res: any[]) => res.slice(0, Math.min(res.length, 5))),
        map((res: any[]) => new SubBreedImagesLoaded(res)),
        catchError(error => of(new AppLoadError(error)))
      )
    )
  );
}
