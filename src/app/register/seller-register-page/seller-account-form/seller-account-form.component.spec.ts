import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerRegisterAccountFormComponent } from './seller-account-form.component';

describe('SellerRegisterAccountFormComponent', () => {
  let component: SellerRegisterAccountFormComponent;
  let fixture: ComponentFixture<SellerRegisterAccountFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerRegisterAccountFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerRegisterAccountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
