import { async, TestBed } from '@angular/core/testing';
import { CoreUiModule } from './core-ui.module';
import { RouterTestingModule } from '@angular/router/testing';
describe('CoreUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreUiModule, RouterTestingModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CoreUiModule).toBeDefined();
  });
});
