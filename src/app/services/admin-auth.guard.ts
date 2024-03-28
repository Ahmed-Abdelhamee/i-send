import { CanActivateFn } from '@angular/router';

export const adminAuthGuard: CanActivateFn = (route, state) => {
  if (sessionStorage.getItem("Admin"))
    return true;
  else {
    return false
  }
};
