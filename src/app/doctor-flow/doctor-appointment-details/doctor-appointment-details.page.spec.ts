import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctorAppointmentDetailsPage } from './doctor-appointment-details.page';

describe('DoctorAppointmentDetailsPage', () => {
  let component: DoctorAppointmentDetailsPage;
  let fixture: ComponentFixture<DoctorAppointmentDetailsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorAppointmentDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorAppointmentDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
