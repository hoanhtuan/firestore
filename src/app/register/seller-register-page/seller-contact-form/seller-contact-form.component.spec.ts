import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerRegisterContactFormComponent } from './seller-contact-form.component';

describe('SellerRegisterContactFormComponent', () => {
  let component: SellerRegisterContactFormComponent;
  let fixture: ComponentFixture<SellerRegisterContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerRegisterContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerRegisterContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
