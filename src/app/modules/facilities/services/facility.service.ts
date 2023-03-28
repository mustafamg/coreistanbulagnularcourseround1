import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Facility } from '../models/facilities';
const API_FACILITY_URL = `${environment.apiUrl}/Facilities`;

@Injectable({
  providedIn: 'root'
})

export class FacilityService {
  constructor(private http: HttpClient) {
  }

  get(): Observable<Facility[]> {
    return this.http.get<Facility[]>(`${API_FACILITY_URL}`)
  }

  post(item: Facility) {
    return this.http.post(`${API_FACILITY_URL}`, item );
  }
}
