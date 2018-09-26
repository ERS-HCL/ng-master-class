import { async, TestBed } from '@angular/core/testing';
import { CoreUiModule } from './core-ui.module';

describe('CoreUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CoreUiModule).toBeDefined();
  });
});
