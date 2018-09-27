import { async, TestBed } from '@angular/core/testing';
import { DataServicesModule } from './data-services.module';

describe('DataServicesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DataServicesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DataServicesModule).toBeDefined();
  });
});
