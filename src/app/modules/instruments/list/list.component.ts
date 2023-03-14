import { Component, OnInit } from '@angular/core';
import { facilities, Facility } from '../../facilities/models/facilities';
import { Instrument, instruments } from '../models/instruments';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  instrumentList: Instrument[] = [];
  facilityList: Facility[] = [];
  constructor() {
    this.instrumentList = instruments;
    this.facilityList = facilities;
   }

  ngOnInit(): void {
    this.getFacilityName();
  }

  getFacilityName(){
    for(let i = 0 ; i < this.instrumentList.length ; i++){
      this.instrumentList[i].facilityName = this.facilityList.filter(a => a.id == this.instrumentList[i].facilityId)[0].name;
    }
  }

}
