import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Survivor } from '../survivor/survivor.types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddSurvivorService {

  constructor(private http: HttpClient) { }

  addSurvivor(formValue): Observable<Survivor> {
    console.log('addSurvivor', formValue);
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
    });

    const options = {
      headers
    };

    return this.http.post(environment.apiUrl + 'people', JSON.stringify(formValue), options).pipe(map((data: any) => {
      const person = new Survivor();
      person.name = data.name;
      person.age = data.age;
      person.gender = data.gender;
      person.lonlat = data.lonlat;
      person.items = data.items;
      return person;
    }));
  }

}
