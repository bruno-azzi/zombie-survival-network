import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Survivor } from './survivor.types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SurvivorService {

  constructor(private http: HttpClient) { }

  getSurvivors(): Observable<Survivor[]> {
    return this.http.get(environment.apiUrl + 'people').pipe(map((data: any) => {
      return data.map((survivor) => {
        const person = new Survivor();
        person.location = survivor.location;
        person.name = survivor.name;
        person.age = survivor.age;
        person.gender = survivor.gender;
        person.lonlat = survivor.lonlat;
        person.infected = survivor.infected;
        return person;
      });
    }));
  }

}
