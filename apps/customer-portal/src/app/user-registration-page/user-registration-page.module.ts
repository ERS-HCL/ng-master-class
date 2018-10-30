import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegistrationModule } from '@hcl-ers/user-registration';
import { RouterModule } from '@angular/router';
import { UserRegistrationPageComponent } from './user-registration-page.component';

@NgModule({
  imports: [
    CommonModule,
    UserRegistrationModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: UserRegistrationPageComponent }
    ])
  ],
  declarations: [UserRegistrationPageComponent],
  exports: [UserRegistrationPageComponent]
})
export class UserRegistrationPageModule {}
