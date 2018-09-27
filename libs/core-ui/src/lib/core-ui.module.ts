import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '@hcl-ers/material';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { DataServicesModule, DogService } from '@hcl-ers/data-services';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'check-out', component: CheckOutComponent }];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    DataServicesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ToolbarComponent,
    AboutComponent,
    ProductsComponent,
    CheckOutComponent
  ],
  exports: [
    ToolbarComponent,
    AboutComponent,
    ProductsComponent,
    CheckOutComponent
  ],
  providers: [DogService]
})
export class CoreUiModule {}
