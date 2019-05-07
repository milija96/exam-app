import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AuthService } from 'src/app/services/auth.service';
=======
>>>>>>> c2794f9dcc36da8482b89e757b8ab20d3108a4f1

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

<<<<<<< HEAD
  constructor(private auth: AuthService) { }
=======
  constructor() { }
>>>>>>> c2794f9dcc36da8482b89e757b8ab20d3108a4f1

  ngOnInit() {
  }

<<<<<<< HEAD
  logIn(data: any) {
      this.auth.singIn(data.value);
  }
=======
>>>>>>> c2794f9dcc36da8482b89e757b8ab20d3108a4f1
}
