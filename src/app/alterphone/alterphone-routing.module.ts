import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlterphoneComponent } from './alterphone.component';

const routes: Routes = [{ path: '', component: AlterphoneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlterphoneRoutingModule { }
