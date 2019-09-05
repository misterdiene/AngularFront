import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  loginUser(data) {
    this._auth.loginUser(data)
    .subscribe(
      res => {
      console.log(data);
        // console.log(res);
        // tslint:disable-next-line: prefer-const
      let jwt = (res.token);
        // tslint:disable-next-line: align
        this._auth.saveToken(jwt);
        // une fois que je suis authentifier je suis dan home
      this._router.navigate(['/menu']);
      },
      // err => console.log(err)
    );
  }

  isAdmin() {
    return this._auth.isAdmin();
  }

  isCaissier() {
    return this._auth.isCaissier();
  }

  isPartenaire() {
    return this._auth.isPartenaire();
  }

  isUser() {
    return this._auth.isUser();
  }

}
