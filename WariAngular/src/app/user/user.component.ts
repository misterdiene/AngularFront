import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ListerService } from '../lister.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


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
        console.log(this.user);
      },
      //err => console.log(err)
    );
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

