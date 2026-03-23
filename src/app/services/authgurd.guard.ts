import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginServiceService } from '../../Services/login-service.service';
import { AdminLoginServiceService } from '../../Services/admin-login-service.service';

export const authgurdGuard: CanActivateFn = () => {

  const router = inject(Router);
  const authService = inject(LoginServiceService);
  const adminLogin = inject(AdminLoginServiceService);

  if (authService.islogedin()) {
    return true;
  }

  router.navigate(['/loginEmp']);
  return false;

};
