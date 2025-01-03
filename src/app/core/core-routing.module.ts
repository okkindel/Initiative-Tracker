import { RouterModule, Routes } from '@angular/router';
import { isAuthenticated } from '@auth/guards';
import { NgModule } from '@angular/core';

import { HomeComponent } from './views';

const routes: Routes = [
  {
    path: '',
    canActivate: [isAuthenticated],
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

  declarations: [],
})
export class CoreRoutingModule {}
