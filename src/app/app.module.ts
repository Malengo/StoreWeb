import { AlterphoneModule } from './alterphone/alterphone.module';

import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterphoneModule } from './registerphone/registerphone.module';
import { FormPhoneComponent } from './form-phone/form-phone.component';




@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RegisterphoneModule,
    MatButtonModule,
    HttpClientModule,
    AlterphoneModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
