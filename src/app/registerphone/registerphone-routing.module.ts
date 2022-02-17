import { RegisterPhoneComponent } from './register-phone/register-phone.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'registerPhones', component: RegisterPhoneComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterphoneRoutingModule { }
