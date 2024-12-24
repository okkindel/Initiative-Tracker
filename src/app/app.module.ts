import { LucideAngularModule, icons } from 'lucide-angular';
import { BrowserModule } from '@angular/platform-browser';
import { TranslocoRootModule } from '@shared/global/i18n';
import { SharedModule } from '@shared/shared.module';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const GLOBAL_MODULES = [LucideAngularModule.pick(icons), TranslocoRootModule];

@NgModule({
  imports: [...GLOBAL_MODULES, AppRoutingModule, BrowserModule, SharedModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
