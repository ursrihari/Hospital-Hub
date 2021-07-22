import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RatingComponent } from './rating.component';

@NgModule({
  declarations: [RatingComponent],
  imports: [CommonModule, IonicModule],
  exports: [RatingComponent],
})
export class RatingModule {}