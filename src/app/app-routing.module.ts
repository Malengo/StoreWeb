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
  {
    path: 'alterphone',
    loadChildren: () =>
      import('./alterphone/alterphone.module').then((m) => m.AlterphoneModule),
  },
  {
    path: 'registerPhones',
    loadChildren: () =>
      import('./registerphone/registerphone.module').then((m) => m.RegisterphoneModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
