import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientAppointmentBookingPage } from './patient-appointment-booking.page';

describe('PatientAppointmentBookingPage', () => {
  let component: PatientAppointmentBookingPage;
  let fixture: ComponentFixture<PatientAppointmentBookingPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientAppointmentBookingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientAppointmentBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
