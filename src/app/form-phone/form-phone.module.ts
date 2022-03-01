import { AlterphoneComponent } from './../alterphone/alterphone.component';
import { FormPhoneComponent } from './form-phone.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RegisterphoneRoutingModule } from '../registerphone/registerphone-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';




@NgModule({
  declarations: [FormPhoneComponent],
  imports: [
    CommonModule,
    RegisterphoneRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSnackBarModule,
  ],
  exports: [FormPhoneComponent],
})
export class FormPhoneModule {}
