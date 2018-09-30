import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@hcl-ers/material';
import { CheckOutComponent } from './check-out.component';
import { DataServicesModule, DogService } from '@hcl-ers/data-services';

import { RouterTestingModule } from '@angular/router/testing';

describe('CheckOutComponent', () => {
  let component: CheckOutComponent;
  let fixture: ComponentFixture<CheckOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, DataServicesModule, RouterTestingModule],
      declarations: [CheckOutComponent],
      providers: [DogService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
