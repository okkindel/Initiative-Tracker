import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DialogService } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { providePrimeNG } from 'primeng/config';
import { definePreset } from '@primeng/themes';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { NgModule } from '@angular/core';
import Aura from '@primeng/themes/aura';

const DESIGN_MODULES = [
  InputTextModule,
  ButtonModule,
  DialogModule,
  ToastModule,
  CardModule,
];

@NgModule({
  providers: [
    providePrimeNG({
      theme: {
        preset: definePreset(Aura, {
          semantic: {
            primary: {
              50: '#faf9f5',
              100: '#e6e4cf',
              200: '#d2cea9',
              300: '#beb983',
              400: '#aaa35d',
              500: '#968e37',
              600: '#80792f',
              700: '#696327',
              800: '#534e1e',
              900: '#3c3916',
              950: '#26240e',
            },
          },
        }),
      },
    }),
    provideAnimationsAsync(),
    MessageService,
    DialogService,
  ],
  imports: [...DESIGN_MODULES],
  exports: [...DESIGN_MODULES],
})
export class DesignModule {}
