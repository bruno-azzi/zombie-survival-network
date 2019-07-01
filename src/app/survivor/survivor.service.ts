import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SurvivorService {

  constructor(private http: HttpClient) { }

  getSurvivors(): Observable<any> {
    return this.http.get(environment.apiUrl + 'people');
  }

}
