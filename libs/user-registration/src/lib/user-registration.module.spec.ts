import { async, TestBed } from '@angular/core/testing';
import { UserRegistrationModule } from './user-registration.module';

describe('UserRegistrationModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UserRegistrationModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UserRegistrationModule).toBeDefined();
  });
});
