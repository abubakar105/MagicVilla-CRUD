import {
  Router,
  CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';

// export class UserAuthGuard{
//   constructor(private loginService:LoginService,private router:Router){}

export const AuthGuard = ():boolean => {
  const loginService = inject(LoginService);
  const router = inject(Router);
 const  allow=localStorage.getItem("isLogeedIn")
  if (allow==="true") {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};

export const LoginAuthGuard = ():boolean => {
  const loginService = inject(LoginService);
  const router = inject(Router);
 const  allow=localStorage.getItem("isLogeedIn")
  if (allow==="true") {
    router.navigate(['/home']);
    return false;
  } else {
    return true;
  }
};
// }
