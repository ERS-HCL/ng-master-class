import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataServicesModule, DogService } from '@hcl-ers/data-services';
import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot, cold } from '@nrwl/nx/testing';
import * as data from '../data/breeds.json';
import { AppEffects } from './app.effects';
import { LoadApp, AppLoaded } from './app.actions';
import { Breeds } from '@hcl-ers/data-services';

describe('AppEffects', () => {
  let actions: Observable<any>;
  let effects: AppEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DataServicesModule,
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        AppEffects,
        DataPersistence,
        DogService,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(AppEffects);
  });

  describe('loadApp$', () => {
    it('should work', () => {
      //   actions = hot('--a-|', { a: new LoadApp() });
      actions = hot('-a-|', { a: new LoadApp() });
      const breeds: Breeds = (<any>data).message;
      const expectedOutput: AppLoaded = new AppLoaded(breeds);
      expect(effects.loadApp$).toBeObservable(hot('b|', { b: expectedOutput }));
    });
  });
});
