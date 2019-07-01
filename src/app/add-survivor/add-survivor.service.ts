import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddSurvivorService {

  constructor(private http: HttpClient) { }

  addSurvivor(formValue) {
    const headers = new HttpHeaders({ 'Content-type': 'application/json' });
    const options = { headers };

    return this.http.post(environment.apiUrl + 'people', formValue, options);
  }

}
