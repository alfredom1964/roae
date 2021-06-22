import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
 
@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {
 
  constructor(public auth: AuthService) {}
 
  canActivate(): Observable<boolean> {
    return this.auth.getToken()
  }
}
