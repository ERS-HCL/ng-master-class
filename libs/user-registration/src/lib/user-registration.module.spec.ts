import { async, TestBed } from '@angular/core/testing';
import { UserRegistrationModule } from './user-registration.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@hcl-ers/material';
import { RouterTestingModule } from '@angular/router/testing';
describe('UserRegistrationModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        RouterTestingModule,
        UserRegistrationModule
      ]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UserRegistrationModule).toBeDefined();
  });
});
