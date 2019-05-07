import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { IMenuItem } from '../../../models/models'
import { AuthService } from 'src/app/services/auth.service';
=======

>>>>>>> c2794f9dcc36da8482b89e757b8ab20d3108a4f1
@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
<<<<<<< HEAD

export class MenuItemsComponent implements OnInit {
  currentUsser: any;
  public menuItems: Array<IMenuItem> = [
    { name: 'Predmet', id: 2, icon: 'fas fa-book', signOut: false, routerLink: '/subjects'},
    { name: 'Statistika', id: 1, icon: 'far fa-chart-bar', signOut: false, routerLink: ''},
    { name: 'Grupe', id: 3, icon: 'fas fa-users', signOut: false, routerLink: '/groups' },
    { name: 'Odjavi se', id: 4, icon: 'fas fa-sign-out-alt', signOut: true, routerLink: '/signOut' },
  ]
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.currentUsser$.subscribe((res) => { 
      this.currentUsser = res;
      this.checkCurrentUser();
    })
  }

  checkLabel(data: any) {
    if (data.signOut === true) {
      this.auth.singOut();
    }
  }

  checkCurrentUser() {
    if(this.currentUsser.role != 'admin') {
      this.menuItems.splice(1, 2);
    }
=======
export class MenuItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
>>>>>>> c2794f9dcc36da8482b89e757b8ab20d3108a4f1
  }

}
