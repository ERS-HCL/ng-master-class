import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorPanelComponent } from './selector-panel.component';

describe('SelectorPanelComponent', () => {
  let component: SelectorPanelComponent;
  let fixture: ComponentFixture<SelectorPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectorPanelComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
