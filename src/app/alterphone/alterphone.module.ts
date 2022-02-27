import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlterphoneRoutingModule } from './alterphone-routing.module';
import { AlterphoneComponent } from './alterphone.component';


@NgModule({
  declarations: [
    AlterphoneComponent
  ],
  imports: [
    CommonModule,
    AlterphoneRoutingModule
  ]
})
export class AlterphoneModule { }
