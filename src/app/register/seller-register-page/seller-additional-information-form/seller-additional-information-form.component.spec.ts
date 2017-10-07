import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAdditionalInformationFormComponent } from './seller-additional-information-form.component';

describe('SellerAdditionalInformationFormComponent', () => {
  let component: SellerAdditionalInformationFormComponent;
  let fixture: ComponentFixture<SellerAdditionalInformationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerAdditionalInformationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerAdditionalInformationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
