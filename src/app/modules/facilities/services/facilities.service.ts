import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Facility } from '../models/facilities';

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {

  constructor(private httpClient:HttpClient) { }

  getList(){
    return this.httpClient.get<Facility[]>("http://localhost:5086/api/facilities");
  }
  getById(id:number){
    
  }
}
