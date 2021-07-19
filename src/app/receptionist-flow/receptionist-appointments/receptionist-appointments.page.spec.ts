import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReceptionistAppointmentsPage } from './receptionist-appointments.page';

describe('ReceptionistAppointmentsPage', () => {
  let component: ReceptionistAppointmentsPage;
  let fixture: ComponentFixture<ReceptionistAppointmentsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptionistAppointmentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReceptionistAppointmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
