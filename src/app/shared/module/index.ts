import { AtomsModule } from '@shared/atoms/atoms.module';
import { TranslocoModule } from '@jsverse/transloco';
import { DesignModule } from '@shared/global/design';
import { CommonModule } from '@angular/common';

export const SHARED_MODULES = [
  TranslocoModule,
  DesignModule,
  CommonModule,
  AtomsModule,
];

export const SHARED_DIRECTIVES = [];

export const SHARED_PIPES = [];

export const SHARED_PROVIDERS = [];
