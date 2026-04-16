import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const authGuardGuard: CanMatchFn = (route, segments) => {

    const router = inject(Router)
    let token = "";

    try {
    token = sessionStorage.getItem('token') ?? "";
    } catch {
    token = "";
    }

const logged = token !== "";

    if(route.path == "login") {
        if(logged) {
            return router.createUrlTree([""]);
        } else{
            return true
        }
    }
    if(logged) {
        return true
    }
    return router.createUrlTree(["login"]);
  
};
