import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.scss']
})
export class DepotComponent implements OnInit {

  constructor(private _userServive: UserService) { }

  ngOnInit() {
  }

  Onsubmit(montant, compte, user) {
    this._userServive.depotFile(
      
      montant.value,
      compte.value, 
      user.value).subscribe(
        data =>{

          //console.log('okkkkkkkkkk');

          montant.value  = null;
          compte.value   = null;
          user.value     = null;
        }
      );
  }

}
