import { Component, OnInit } from '@angular/core';
import { Instrument, instruments } from '../../instruments/models/instruments';
import { facilities, Facility } from '../models/facilities';
@Component({
  selector: 'app-facilities-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  facilityList: Facility[] = [];
  instrumentList: Instrument[] = [];
  displayedColumns = ['id', 'name', 'description', 'instruments', 'action'];
  constructor() {
    this.instrumentList = instruments;
  }

  ngOnInit(): void {
    this.showFacilities();
  }

  showFacilities() {
    this.facilityList = facilities;
    for(let i = 0; i < this.facilityList.length; i++){
      this.facilityList[i].instrumentList = this.instrumentList.filter(s => s.facilityId == this.facilityList[i].id);
    }
  }

  addDummyFacility(){
    this.facilityList.push({id:-1,name:"Some dummy facility", active:true, description:"",instrumentList: []});
  }
}
