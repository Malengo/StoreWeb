import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'smartphones',
  },
  {
    path: 'smartphones',
    loadChildren: () =>
      import('./smartphones/smartphone.module').then((m) => m.SmartphoneModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
