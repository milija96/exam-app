<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
=======
import { Component } from '@angular/core';
>>>>>>> c2794f9dcc36da8482b89e757b8ab20d3108a4f1

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
<<<<<<< HEAD
export class AppComponent implements OnInit{
  title = 'new-app';
  authenticated: boolean = false;
  constructor(private auth: AuthService){}

  ngOnInit(){
    this.auth.authenticated.subscribe(
      (res) => {
        if(res != null) {
          this.authenticated = res;
        }
      }
    )
  }
=======
export class AppComponent {
  title = 'new-app';
>>>>>>> c2794f9dcc36da8482b89e757b8ab20d3108a4f1
}
