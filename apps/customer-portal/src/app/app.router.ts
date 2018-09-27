import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent, ProductsComponent } from '@hcl-ers/core-ui';

export const router: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  {
    path: 'user-registration',
    loadChildren: '@hcl-ers/user-registration#UserRegistrationModule'
  }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, {
  initialNavigation: 'enabled'
});
