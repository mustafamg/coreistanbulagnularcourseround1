import { Component, OnInit } from '@angular/core';
import { facilities, Facility } from '../models/facilities';
@Component({
  selector: 'app-facilities-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  facilities: Facility[] = [];
  pickedFacilityName: string = "";
  constructor() {
  }

  ngOnInit(): void {
  }

  showFacilities() {
    this.facilities = facilities;
  }

  pickFacility(facility: Facility) {
    this.pickedFacilityName = facility.name;
  }

  addDummyFacility(){
    this.facilities.push({id:-1,name:"Some dummy facility"});
  }
}
