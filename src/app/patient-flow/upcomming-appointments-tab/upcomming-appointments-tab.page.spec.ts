import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpcommingAppointmentsTabPage } from './upcomming-appointments-tab.page';

describe('UpcommingAppointmentsTabPage', () => {
  let component: UpcommingAppointmentsTabPage;
  let fixture: ComponentFixture<UpcommingAppointmentsTabPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcommingAppointmentsTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpcommingAppointmentsTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
