import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {

  constructor(private _userServive: AuthService) { }

  ngOnInit() {
  }

  Onsubmit(partenaire) {
    this._userServive.compteFile(
      partenaire.value).subscribe(
        data =>{

          //console.log('okkkkkkkkkk');

          partenaire.value   = null;
        }
      );
  }

}
