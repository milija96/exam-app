import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {
  curentUser: any;
  constructor(private auth: AuthService) { 
    this.auth.currentUsser$.subscribe(
      (res) => {
        this.curentUser = res;
      }
    )
  }
  
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if(this.curentUser.role === 'admin') {
        return true;
    } else {
        return false;
    }
}
}
