import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@hcl-ers/material';
import { CheckOutComponent } from './check-out.component';
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
    CheckOutComponent
  ],
  exports: [
    CheckOutComponent
  ],
  providers: [DogService]
})
export class CheckOutModule {}
