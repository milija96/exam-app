import { Injectable } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { 
    const auth = localStorage.getItem('auth');
    const user = localStorage.getItem('user');
    this.check(auth, JSON.parse(user));
  }

  authenticated: Subject<boolean> = new ReplaySubject<boolean>(null);
  currentUsser$: Subject<any> = new ReplaySubject<any>(null);
  singIn(data: any){
    this.authenticated.next(true);
    this.currentUsser$.next(data);
    if(data.user == 'admin') {
      data.role = 'admin';
    } else {
      data.role = 'user'
    }
    localStorage.setItem('auth', 'true')
    localStorage.setItem('user', JSON.stringify(data))
  }
  singOut(){
    this.authenticated.next(false)
    localStorage.removeItem('auth')
    localStorage.removeItem('user')
  }
  check(auth: any, user: any){
    if(auth == 'true') {
      this.authenticated.next(true);
    }
    else {
      this.authenticated.next(false);
    }
    if(user != '' && user != null) {
      this.currentUsser$.next(user)
    }
  }
}