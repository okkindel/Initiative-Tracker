import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';

import {
  InitiativeDiceModalComponent,
  InitiativeModalComponent,
  AddEnemyModalComponent,
} from './dialogs';
import {
  InitiativeQueueComponent,
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
  AddEnemyModalComponent,
  HomeComponent,
];

const SERVICES = [MonstersDtoService];

@NgModule({
  imports: [CoreRoutingModule, SharedModule, ReactiveFormsModule],
  declarations: [...COMPONENTS],
  providers: [...SERVICES],
})
export class CoreModule {}
