import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
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
}
