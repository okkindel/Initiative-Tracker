import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';

import {
  InitiativeDiceModalComponent,
  InitiativeQueueComponent,
} from './containers';
import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './views';

const COMPONENTS = [
  InitiativeDiceModalComponent,
  InitiativeQueueComponent,
  HomeComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CoreRoutingModule, SharedModule],
})
export class CoreModule {}
