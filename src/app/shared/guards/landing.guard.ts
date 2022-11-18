import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/Auth/auth.service';
@Injectable({
  providedIn: 'root',
})
export class LandingGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {}
  canActivate(
    _next: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn === true) {
      this.router.navigate(['dashboard']);
    }
    return true;
  }
}
