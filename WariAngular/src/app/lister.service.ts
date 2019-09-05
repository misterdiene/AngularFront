import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ListerService {

  // tslint:disable-next-line: variable-name
  private _userUrl = 'http://localhost:8000/api/users/1';

  // tslint:disable-next-line: variable-name
  private _partenaireUrl = 'http://localhost:8000/api/partenaires/1';

  // tslint:disable-next-line: variable-name
  private _depotUrl = 'http://127.0.0.1:8000/api/listdepot/1';

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get<any>(this._userUrl);
  }

  getPartenaire() {
    return this.http.get<any>(this._partenaireUrl);
  }

  getDepot() {
    return this.http.get<any>(this._depotUrl);
  }

  getCompte() {
    return this.http.get<any>(this._partenaireUrl);
  }
}
