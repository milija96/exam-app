import { Component, OnInit } from '@angular/core';
import { IMenuItem } from '../../../models/models'
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})

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
  }

}
