import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { Action, Store } from '@ngrx/store';
import { AppState } from './app.reducer';
import {
  LoadApp,
  AppLoaded,
  AppLoadError,
  AppActionTypes,
  BreedImagesLoaded,
  SubBreedImagesLoaded,
  ClearCart
} from './app.actions';
import { DogService } from '@hcl-ers/data-services';
import { Subject, AsyncSubject, BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<AppState>,
    private _dogService: DogService,
    private router: Router,
    private store: Store<AppState>,
    private logger: NGXLogger
  ) {}

  @Effect()
  loadApp$: Observable<Action> = this.actions$.pipe(
    ofType(AppActionTypes.LoadApp),
    mergeMap(() =>
      this._dogService.getBreeds().pipe(
        map((res: any) => res.message),
        map((res: any) => new AppLoaded(res)),
        catchError(error => {
          this.logger.error(error);
          return of(new AppLoadError(error));
        })
      )
    )
  );

  @Effect()
  purchaseCompleted$: Observable<Action> = this.actions$.pipe(
    ofType(AppActionTypes.PurchaseCompleted),
    tap(_ => {
      this.store.dispatch(new ClearCart());
      this.router.navigate(['/']);
    })
  );

  @Effect({ dispatch: false })
  routeToInvoice$: Observable<Action> = this.actions$.pipe(
    ofType(AppActionTypes.UpdateUser),
    tap(_ => this.router.navigate(['check-out']))
  );

  @Effect()
  loadBreedImages$: Observable<Action> = this.actions$.pipe(
    ofType(AppActionTypes.LoadBreedImages),
    mergeMap((action: any) =>
      this._dogService.getBreedImagesByType(action.payload).pipe(
        map((res: any) => res.message),
        map((res: any[]) => res.slice(0, Math.min(res.length, 4))),
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
        map((res: any[]) => res.slice(0, Math.min(res.length, 4))),
        map((res: any[]) => new SubBreedImagesLoaded(res)),
        catchError(error => of(new AppLoadError(error)))
      )
    )
  );
}
