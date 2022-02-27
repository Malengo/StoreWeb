import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SmartphonesComponent } from './smartphones.component';



const routes: Routes = [
  {
    path: '', component: SmartphonesComponent,
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartphoneRoutingModule { }
