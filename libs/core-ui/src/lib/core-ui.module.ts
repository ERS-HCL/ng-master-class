import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '@hcl-ers/material';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { DataServicesModule, DogService } from '@hcl-ers/data-services';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    DataServicesModule
  ],
  declarations: [
    ToolbarComponent,
    AboutComponent,
    ProductsComponent
  ],
  exports: [
    ToolbarComponent,
    AboutComponent,
    ProductsComponent
  ],
  providers: [DogService]
})
export class CoreUiModule {}
