import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DoctorViewPageRoutingModule } from './doctor-view-routing.module';
import { DoctorViewPage } from './doctor-view.page';
import { RatingModule } from '../../components/rating/rating.module';
import { SubStringPipe } from '@app/pipe/sub-string.pipe';
import { LaunchNavigator} from '@ionic-native/launch-navigator/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorViewPageRoutingModule,
    RatingModule
  ],
  declarations: [DoctorViewPage,SubStringPipe],
  providers:[LaunchNavigator]
})
export class DoctorViewPageModule {}
