import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLoginComponent } from './app-login/app-login.component';
import { CheckOutPageComponent } from './check-out-page/check-out-page.component';
import { AboutComponent } from '@hcl-ers/core-ui';
import { ProductsPageComponent } from './products-page/products-page.component';
import { AuthGuard } from './_guards/auth.guard';

export const router: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  {
    path: 'products',
    component: ProductsPageComponent
  },
  { path: 'login', component: AppLoginComponent },
  {
    path: 'user-registration',
    loadChildren: '@hcl-ers/user-registration#UserRegistrationModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'check-out',
    component: CheckOutPageComponent,
    canActivate: [AuthGuard]
  }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, {
  initialNavigation: 'enabled'
});
