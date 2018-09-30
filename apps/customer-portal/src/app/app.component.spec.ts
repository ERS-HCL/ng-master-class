import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NxModule } from '@nrwl/nx';
import { CoreUiModule } from '@hcl-ers/core-ui';

import { routes } from './app.router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  initialState as appInitialState,
  appReducer
} from './+state/app.reducer';
import { AppEffects } from './+state/app.effects';
import { DataServicesModule, DogService } from '@hcl-ers/data-services';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CoreUiModule,
        DataServicesModule,
        NxModule.forRoot(),
        StoreModule.forRoot(
          { app: appReducer },
          {
            initialState: { app: appInitialState },
            metaReducers: !environment.production ? [storeFreeze] : []
          }
        ),
        EffectsModule.forRoot([AppEffects]),
        StoreRouterConnectingModule
      ],
      providers: [DogService],
      declarations: [AppComponent]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'customer-portal'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('customer-portal');
  }));
  /*   it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to customer-portal!'
    );
  })); */
});
