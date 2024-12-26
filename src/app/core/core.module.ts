import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import {
  InitiativeDiceModalComponent,
  InitiativeQueueComponent,
  InitiativeModalComponent,
  EnemiesToolbarComponent,
} from './containers';
import { CoreRoutingModule } from './core-routing.module';
import { MonstersDtoService } from './services';
import { HomeComponent } from './views';

const COMPONENTS = [
  InitiativeDiceModalComponent,
  InitiativeModalComponent,
  InitiativeQueueComponent,
  EnemiesToolbarComponent,
  HomeComponent,
];

const SERVICES = [MonstersDtoService];

@NgModule({
  imports: [CoreRoutingModule, SharedModule, FormsModule],
  declarations: [...COMPONENTS],
  providers: [...SERVICES],
})
export class CoreModule {}
