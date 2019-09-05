import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ListerService } from '../lister.service';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.scss']
})
export class DepotComponent implements OnInit {

  depot = [];
  
  constructor(private _userServive: UserService, private _listService: ListerService) { }

  ngOnInit() {
     this._listService.getDepot().subscribe(
      res=>{
        console.log(res);
        this.depot = res
      }, err=>{
        //console.log(err);
      }
    ) 
  }

  OnSubmit(montant, compte, user) {
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
