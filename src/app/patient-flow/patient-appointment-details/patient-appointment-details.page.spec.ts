import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientAppointmentDetailsPage } from './patient-appointment-details.page';

describe('PatientAppointmentDetailsPage', () => {
  let component: PatientAppointmentDetailsPage;
  let fixture: ComponentFixture<PatientAppointmentDetailsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientAppointmentDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientAppointmentDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
