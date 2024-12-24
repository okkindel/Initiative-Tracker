import { UserService } from '@api/services';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const isAuthenticated = (): boolean => {
  const _userService = inject(UserService);
  const _router = inject(Router);

  if (_userService.getIsAuthenticated()) return true;
  _router.navigate(['/login']);
  return false;
};
