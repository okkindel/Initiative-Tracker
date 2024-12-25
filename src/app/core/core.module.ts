import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { InitiativeDiceModalComponent } from './modals';
import { InitiativeQueueComponent } from './containers';
import { HomeComponent } from './views';

const COMPONENTS = [
  HomeComponent,
  InitiativeDiceModalComponent,
  InitiativeQueueComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CoreRoutingModule, SharedModule],
})
export class CoreModule {}
