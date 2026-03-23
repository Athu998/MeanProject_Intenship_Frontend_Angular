import { CanActivateFn, Router } from '@angular/router';
import { AdminLoginServiceService } from '../../Services/admin-login-service.service';
import { inject } from '@angular/core';

export const adminAuthGuard: CanActivateFn = () => {

  const router = inject(Router);
  const adminService = inject(AdminLoginServiceService);

  if(adminService.isAdminLoggedIn()){
    return true;
  }

  router.navigate(['/admin-login']);
  return false;

};
