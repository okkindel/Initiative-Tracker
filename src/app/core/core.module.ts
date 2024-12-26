import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';

import {
  InitiativeDiceModalComponent,
  InitiativeQueueComponent,
  EnemiesToolbarComponent,
} from './containers';
import { CoreRoutingModule } from './core-routing.module';
import { MonstersDtoService } from './services';
import { HomeComponent } from './views';

const COMPONENTS = [
  InitiativeDiceModalComponent,
  InitiativeQueueComponent,
  EnemiesToolbarComponent,
  HomeComponent,
];

const SERVICES = [MonstersDtoService];

@NgModule({
  imports: [CoreRoutingModule, SharedModule],
  declarations: [...COMPONENTS],
  providers: [...SERVICES],
})
export class CoreModule {}
