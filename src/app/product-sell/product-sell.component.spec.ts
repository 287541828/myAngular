import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSellComponent } from './product-sell.component';

describe('ProductSellComponent', () => {
  let component: ProductSellComponent;
  let fixture: ComponentFixture<ProductSellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
