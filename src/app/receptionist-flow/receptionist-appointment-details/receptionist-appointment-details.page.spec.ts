import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReceptionistAppointmentDetailsPage } from './receptionist-appointment-details.page';

describe('ReceptionistAppointmentDetailsPage', () => {
  let component: ReceptionistAppointmentDetailsPage;
  let fixture: ComponentFixture<ReceptionistAppointmentDetailsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptionistAppointmentDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReceptionistAppointmentDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
