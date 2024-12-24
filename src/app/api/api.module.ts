import {
  provideTanStackQuery,
  QueryClient,
} from '@tanstack/angular-query-experimental';
import { provideAppInitializer, NgModule, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { AppwriteService, DatabaseService, UserService } from './services';

const userServiceInitializer = (service: UserService): Observable<unknown> =>
  service.init();

@NgModule({
  providers: [
    provideTanStackQuery(new QueryClient()),
    provideAppInitializer(() => userServiceInitializer(inject(UserService))),
    AppwriteService,
    DatabaseService,
    UserService,
  ],
})
export class ApiModule {}
