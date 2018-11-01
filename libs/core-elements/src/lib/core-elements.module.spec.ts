import { async, TestBed } from '@angular/core/testing';
import { CoreElementsModule } from './core-elements.module';

describe('CoreElementsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreElementsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CoreElementsModule).toBeDefined();
  });
});
