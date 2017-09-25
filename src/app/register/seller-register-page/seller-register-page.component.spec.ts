import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerRegisterPageComponent } from './seller-register-page.component';

describe('SellerRegisterPageComponent', () => {
  let component: SellerRegisterPageComponent;
  let fixture: ComponentFixture<SellerRegisterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerRegisterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
