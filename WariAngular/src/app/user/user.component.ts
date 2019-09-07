import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ListerService } from '../lister.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
export interface User {
  id: number;
  username: string;
  roles: string;
  nom: string;
  prenom: string;
  profile: string;
  imageName: string;
}


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  displayedColumns: string[] = ['id', 'username', 'roles', 'nom', 'prenom', 'profile', 'imageName'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  user = [];

  imageUrl: string = "/assets/img/img.jpeg";
  fileToUpload: File = null;
  
  // tslint:disable-next-line: variable-name
  constructor(private _userServive: UserService, private _listServive: ListerService, private _router: Router) { }

  ngOnInit() {
    this._listServive.getUser()
    .subscribe(
      res => {
        this.user = res
        //console.log(this.user);
        this.dataSource = new MatTableDataSource(this.user);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      //err => console.log(err)
    );
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
    if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
    }
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  // Ajout utilisateur  

  OnSubmit(username, plainPassword, nom, prenom, partenaire, profile, Image){
    this._userServive.userFile(
      username.value,
      plainPassword.value,
      nom.value,
      prenom.value,
      partenaire.value,
      profile.value,
      this.fileToUpload).subscribe(
        data => { 

          //console.log('okkkkkkkkkk');

          username.value         = null;
          plainPassword.value    = null;
          nom.value              = null;
          prenom.value           = null;
          partenaire.value       = null;
          profile.value          = null;
          Image.value            = null;
          this.imageUrl = "/assets/img/img.jpeg";
        }
        
      );
  }

  
}

