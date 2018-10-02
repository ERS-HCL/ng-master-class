import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import { AppLoginComponent } from './app-login/app-login.component';
import { ProductsPageComponent } from './products-page/products-page.component';

@NgModule({
  declarations: [AppComponent, AppLoginComponent, ProductsPageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreUiModule,
    RouterModule,
    DataServicesModule,
    NxModule.forRoot(),
    routes,
    StoreModule.forRoot(
      { app: appReducer },
      {
        initialState: { app: appInitialState },
        metaReducers: !environment.production ? [storeFreeze] : []
      }
    ),
    EffectsModule.forRoot([AppEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule
  ],
  providers: [DogService],
  bootstrap: [AppComponent]
})
export class AppModule {}
