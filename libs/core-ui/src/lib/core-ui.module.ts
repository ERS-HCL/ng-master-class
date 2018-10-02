import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '@hcl-ers/material';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { DataServicesModule, DogService } from '@hcl-ers/data-services';
import { LoginComponent, LoginModel } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule, DataServicesModule],
  declarations: [
    ToolbarComponent,
    AboutComponent,
    ProductsComponent,
    LoginComponent
  ],
  exports: [
    ToolbarComponent,
    AboutComponent,
    ProductsComponent,
    LoginComponent
  ],
  providers: [DogService]
})
export class CoreUiModule {}
