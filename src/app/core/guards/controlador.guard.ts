import { Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const controladorGuard: CanActivateFn = (route, state) => {

  //let admin = ''
  const router = Inject(Router)

  const token = sessionStorage.getItem('token')
  const admin = sessionStorage.getItem('admin')


  if (token !== null || admin === 'sociedad') {
    return true;
  } else {
    router.navigateByUrl('/profile')
    return false
  }


};
