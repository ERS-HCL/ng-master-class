import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreUiModule, AlertService } from '@hcl-ers/core-ui';

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
import { NavigationComponent } from './navigation/navigation.component';
import { CheckOutPageComponent } from './check-out-page/check-out-page.component';
import { AuthenticationService } from './_services/authentication-service';
import { UserService } from './_services/user-service';
import { AuthGuard } from './_guards/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptorService } from './_services/jwt-interceptor';
import { ErrorInterceptorService } from './_services/error-interceptor';
import { FakeBackendInterceptorService } from './_services/fake-backend';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { CartGuard } from './_guards/cart.guard';
import { UserGuard } from './_guards/user.guard';
import { CoreElementsModule } from '@hcl-ers/core-elements';
import { ServiceWorkerModule } from '@angular/service-worker';

export const fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptorService,
  multi: true
};

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    ProductsPageComponent,
    NavigationComponent,
    CheckOutPageComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreUiModule,
    RouterModule,
    DataServicesModule,
    CoreElementsModule,
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
    StoreRouterConnectingModule,
    // Server side logging
    // [LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR}), ...],
    LoggerModule.forRoot({ level: NgxLoggerLevel.DEBUG }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [
    DogService,
    AuthenticationService,
    UserService,
    AlertService,
    AuthGuard,
    CartGuard,
    UserGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
