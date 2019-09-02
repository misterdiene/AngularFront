import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // à importer

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  // Ajouter utilisateur

  userFile(
    
    username: string, 
    plainPassword: string,
    nom: string, 
    prenom: string, 
    partenaire: string, 
    profile: string, 
    fileToUpload: File
    ) {
    const endpoint = 'http://127.0.0.1:8000/api/user';
    const formData: FormData = new FormData();
    
    formData.append('username', username);
    formData.append('plainPassword', plainPassword);
    formData.append('prenom', prenom);
    formData.append('nom', nom);
    formData.append('partenaire', partenaire);
    formData.append('profile', profile);
    formData.append('imageName', fileToUpload, fileToUpload.name);

    return this.http.post(endpoint, formData);
  }

// Ajout Partenaire 

  partenaireFile(
    username: string, 
    plainPassword: string, 
    nom: string, 
    prenom: string, 
    nomentreprise: string, 
    ninea: string, 
    adresse: string, 
    email: string, 
    telephone: string, 
    raisonsocial: string, 
    fileToUpload: File
    ) {
    const endpoint = 'http://127.0.0.1:8000/api/partenaire';
    const formData: FormData = new FormData();

    formData.append('username', username);
    formData.append('plainPassword', plainPassword);
    formData.append('nom', nom);
    formData.append('prenom', prenom);
    formData.append('nomentreprise', nomentreprise);
    formData.append('ninea', ninea);
    formData.append('adresse', adresse);
    formData.append('email', email);
    formData.append('telephone', telephone);
    formData.append('imageName', fileToUpload, fileToUpload.name);
    formData.append('raisonsocial', raisonsocial);

    return this.http.post(endpoint, formData);
  }

  // Créer Compte 

  compteFile(
    partenaire: string, 
    
    ) {
    const endpoint = 'http://127.0.0.1:8000/api/compte';
    const formData: FormData = new FormData();
    console.log(formData);
    formData.append('partenaire', partenaire);
    
    return this.http.post(endpoint, formData);
  }

  // Faire un depot Compte 

  depotFile(
    montant:string,
    compte:string, 
    user:string
    ) {
    const endpoint = 'http://127.0.0.1:8000/api/depot';
    const formData: FormData = new FormData();

    formData.append('montant', montant);
    formData.append('compte', compte);
    formData.append('user', user);
    //console.log(formData);
    return this.http.post(endpoint, formData);
  }

}
