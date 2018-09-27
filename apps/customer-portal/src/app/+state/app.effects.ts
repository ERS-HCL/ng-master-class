import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { AppState } from './app.reducer';
import {
  LoadApp,
  AppLoaded,
  AppLoadError,
  AppActionTypes
} from './app.actions';
import { DogService, Breeds } from '@hcl-ers/data-services';
import { Subject } from 'rxjs';

@Injectable()
export class AppEffects {
  @Effect()
  loadApp$ = this.dataPersistence.fetch(AppActionTypes.LoadApp, {
    run: (action: LoadApp, state: AppState) => {
      // Your custom REST 'load' logic goes here. For now just return an empty list...

      const subject = new Subject<AppLoaded>();

      this._dogService.getBreeds().subscribe((res: any) => {
        console.log(res.message);
        const breeds: Breeds = res.message;
        subject.next(new AppLoaded(breeds));
        subject.complete();
      });
      return subject;
    },

    onError: (action: LoadApp, error) => {
      console.error('Error', error);
      return new AppLoadError(error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<AppState>,
    private _dogService: DogService
  ) {}
}
