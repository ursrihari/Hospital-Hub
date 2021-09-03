import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompletedAppointmentsTabPage } from './completed-appointments-tab.page';

describe('CompletedAppointmentsTabPage', () => {
  let component: CompletedAppointmentsTabPage;
  let fixture: ComponentFixture<CompletedAppointmentsTabPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedAppointmentsTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompletedAppointmentsTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
