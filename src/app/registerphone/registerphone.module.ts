import { NgModule } from '@angular/core';

import { FormPhoneModule } from './../form-phone/form-phone.module';
import { RegisterPhoneComponent } from './register-phone.component';




@NgModule({
  declarations: [RegisterPhoneComponent],
  imports: [
    FormPhoneModule
  ],
})
export class RegisterphoneModule {}
