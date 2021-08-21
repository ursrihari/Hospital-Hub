import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectDoctorTimeSlotPage } from './select-doctor-time-slot.page';

describe('SelectDoctorTimeSlotPage', () => {
  let component: SelectDoctorTimeSlotPage;
  let fixture: ComponentFixture<SelectDoctorTimeSlotPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDoctorTimeSlotPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectDoctorTimeSlotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
