import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { ListerService } from '../lister.service';

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.scss']
})
export class PartenaireComponent implements OnInit {

  partenaire = [];

  imageUrl: string = "/assets/img/BG.png";
  fileToUpload: File = null;

  // tslint:disable-next-line: variable-name
  constructor(private _userServive: UserService, private _listeService: ListerService ,private _router: Router) { }

  ngOnInit() {
    this._listeService.getPartenaire()
    .subscribe(
      res => this.partenaire = res,
      err => console.log(err)
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

  OnSubmit(username,plainPassword,nom,prenom,nomentreprise,ninea,adresse,email,telephone,Image,raisonsocial){
    this._userServive.partenaireFile(
      username.value,
      plainPassword.value,
      nom.value,
      prenom.value,
      nomentreprise.value,
      ninea.value,
      adresse.value,
      email.value,
      telephone.value,
      raisonsocial.value,
      this.fileToUpload).subscribe(
        data =>{
          console.log(data);
          username.value         = null;
          plainPassword.value    = null;
          prenom.value           = null;
          username.value         = null;
          nom.value              = null;
          nomentreprise.value    = null;
          ninea.value            = null;
          adresse.value          = null;
          email.value            = null;
          telephone.value        = null;
          Image.value            = null;
          raisonsocial.value     = null;
          this.imageUrl = "/assets/img/img.jpeg";
        }
        
      );
  }

}

