import { AtomsModule } from '@shared/atoms/atoms.module';
import { AvvvatarsComponent } from '@ngxpert/avvvatars';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslocoModule } from '@jsverse/transloco';
import { DesignModule } from '@shared/global/design';
import { CommonModule } from '@angular/common';

export const SHARED_MODULES = [
  AvvvatarsComponent,
  TranslocoModule,
  NgSelectModule,
  DesignModule,
  CommonModule,
  AtomsModule,
];

export const SHARED_DIRECTIVES = [];

export const SHARED_PIPES = [];

export const SHARED_PROVIDERS = [];
