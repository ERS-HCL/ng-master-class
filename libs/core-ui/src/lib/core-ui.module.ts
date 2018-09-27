import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '@hcl-ers/material';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [ToolbarComponent, AboutComponent, ProductsComponent],
  exports: [ToolbarComponent, AboutComponent, ProductsComponent]
})
export class CoreUiModule {}
