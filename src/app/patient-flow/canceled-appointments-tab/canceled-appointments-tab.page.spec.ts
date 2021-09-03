import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CanceledAppointmentsTabPage } from './canceled-appointments-tab.page';

describe('CanceledAppointmentsTabPage', () => {
  let component: CanceledAppointmentsTabPage;
  let fixture: ComponentFixture<CanceledAppointmentsTabPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CanceledAppointmentsTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CanceledAppointmentsTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
