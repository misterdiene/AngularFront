import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ListerService } from '../lister.service';
@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {

  compte = [];

  constructor(private _userServive: AuthService, private _listService: ListerService) { }

  ngOnInit() {
    this._listService.getCompte().subscribe(
      res=>{
        console.log(res);
        this.compte = res
      }, err=>{
        console.log(err);
      }
    )
  }

  OnSubmit(ninea:any) {
    this._userServive.compteFile(
      ninea.value).subscribe(
        data =>{

          console.log(data);
          ninea.value   = null;
        }
      );
  }

}
