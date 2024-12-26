import { UserService } from '@api/services';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { Observable, map } from 'rxjs';

export const isAuthenticated = (): Observable<boolean> => {
  const _userService = inject(UserService);
  const _router = inject(Router);

  return _userService.getIsAuthenticated().pipe(
    map((isAuthenticated) => {
      if (!!isAuthenticated) return true;

      _router.navigate(['/login']);
      return false;
    }),
  );
};
