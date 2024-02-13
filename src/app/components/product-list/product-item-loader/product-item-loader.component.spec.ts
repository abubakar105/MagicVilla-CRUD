import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemLoaderComponent } from './product-item-loader.component';

describe('ProductItemLoaderComponent', () => {
  let component: ProductItemLoaderComponent;
  let fixture: ComponentFixture<ProductItemLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductItemLoaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductItemLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
