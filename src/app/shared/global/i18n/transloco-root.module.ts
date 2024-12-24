import { provideTranslocoPersistLang } from '@jsverse/transloco-persist-lang';
import { provideTransloco, TranslocoModule } from '@jsverse/transloco';
import { provideHttpClient } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { isDevMode, NgModule } from '@angular/core';
import LOCALE_EN from '@angular/common/locales/en';
import LOCALE_PL from '@angular/common/locales/pl';

import { TranslocoHttpLoader } from './transloco-loader';

export const LANGUAGES = ['en', 'pl'] as const;
export const DEFAULT_LANG = 'en';

export type Language = (typeof LANGUAGES)[number];

registerLocaleData(LOCALE_PL, 'pl');
registerLocaleData(LOCALE_EN, 'en');

@NgModule({
  exports: [TranslocoModule],
  providers: [
    provideHttpClient(),
    provideTransloco({
      loader: TranslocoHttpLoader,
      config: {
        availableLangs: [...LANGUAGES],
        reRenderOnLangChange: true,
        defaultLang: DEFAULT_LANG,
        prodMode: !isDevMode(),
      },
    }),
    provideTranslocoPersistLang({
      storage: { useValue: localStorage },
    }),
  ],
})
export class TranslocoRootModule {}
