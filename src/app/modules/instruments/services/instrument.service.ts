import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Instrument } from '../models/instruments';
const API_INSTRUMENT_URL = `${environment.apiUrl}/Instruments`;

@Injectable({
  providedIn: 'root'
})

export class InstrumentService {
  constructor(private http: HttpClient) {
  }

  get(): Observable<Instrument[]> {
    return this.http.get<Instrument[]>(`${API_INSTRUMENT_URL}`)
  }

  getById(id: number): Observable<Instrument> {
    return this.http.get<Instrument>(`${API_INSTRUMENT_URL}/` + id)
  }

  post(item: Instrument) {
    return this.http.post(`${API_INSTRUMENT_URL}`,  item);
  }
}
