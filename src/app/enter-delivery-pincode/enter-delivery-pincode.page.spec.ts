import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnterDeliveryPincodePage } from './enter-delivery-pincode.page';

describe('EnterDeliveryPincodePage', () => {
  let component: EnterDeliveryPincodePage;
  let fixture: ComponentFixture<EnterDeliveryPincodePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterDeliveryPincodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnterDeliveryPincodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
