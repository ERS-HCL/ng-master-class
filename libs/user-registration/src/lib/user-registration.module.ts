import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { MaterialModule } from '@hcl-ers/material';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: UserRegistrationComponent }
    ])
  ],
  declarations: [UserRegistrationComponent],
  exports: [UserRegistrationComponent]
})
export class UserRegistrationModule {}
