import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterPhoneComponent } from './register-phone.component';


const routes: Routes = [{
  path: '', component: RegisterPhoneComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterphoneRoutingModule { }
