import { NgModule } from '@angular/core';

import { IconComponent } from './icon';

const ATOMS = [IconComponent];

@NgModule({ imports: ATOMS, exports: ATOMS })
export class AtomsModule {}
