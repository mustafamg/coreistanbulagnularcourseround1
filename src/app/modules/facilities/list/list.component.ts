import { Component, OnInit } from '@angular/core';
import { Instrument, instruments } from '../../instruments/models/instruments';
import { facilities, Facility } from '../models/facilities';
@Component({
  selector: 'app-facilities-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  facilities: Facility[] = [];
  instrumentList: Instrument[] = [];
  pickedFacilityName: string = "";
  constructor() {
    this.instrumentList = instruments;
  }

  ngOnInit(): void {
    this.showFacilities();
  }

  showFacilities() {
    this.facilities = facilities;
    for(let i = 0; i < this.facilities.length; i++){
      this.facilities[i].instrumentList = this.instrumentList.filter(s => s.facilityId == this.facilities[i].id);
    }
  }

  pickFacility(facility: Facility) {
    this.pickedFacilityName = facility.name;
  }

  addDummyFacility(){
    this.facilities.push({id:-1,name:"Some dummy facility", active:true, description:"",instrumentList: []});
  }
}
