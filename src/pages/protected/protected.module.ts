import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProtectedPage } from './protected';

@NgModule({
  declarations: [
    ProtectedPage,
  ],
  imports: [
    IonicPageModule.forChild(ProtectedPage),
  ],
})
export class ProtectedPageModule {}
