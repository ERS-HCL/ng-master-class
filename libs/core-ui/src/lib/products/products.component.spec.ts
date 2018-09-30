import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataServicesModule, DogService } from '@hcl-ers/data-services';
import { ProductsComponent } from './products.component';
import { MaterialModule } from '@hcl-ers/material';
import { RouterTestingModule } from '@angular/router/testing';
describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, DataServicesModule, RouterTestingModule],
      declarations: [ProductsComponent],
      providers: [DogService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
