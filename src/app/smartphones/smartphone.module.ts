import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SmartphoneRoutingModule } from './smartphone-routing.module';
import { SmartphonesComponent } from './smartphones.component';



@NgModule({
  declarations: [
    SmartphonesComponent
  ],
  imports: [CommonModule, SmartphoneRoutingModule, MatTableModule, MatCardModule,MatToolbarModule],
})
export class SmartphoneModule {}
