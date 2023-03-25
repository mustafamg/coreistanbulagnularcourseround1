import { Component, OnInit } from '@angular/core';
import { Instrument, instruments } from '../../instruments/models/instruments';
import { facilities, Facility } from '../models/facilities';
import { FacilitiesService } from '../services/facilities.service';
@Component({
  selector: 'app-facilities-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[FacilitiesService]
})
export class ListComponent implements OnInit {

  facilities: Facility[] = [];
  instrumentList: Instrument[] = [];
  pickedFacilityName: string = "";
  constructor(private service:FacilitiesService) {
  }

  ngOnInit(): void {
    this.showFacilities();
  }

  showFacilities() {
    console.log("Before the request")
    this.service.getList().subscribe(list=>{
      this.facilities= list;
      console.log("Inside the request");
    });
    console.log("After the request");

    // this.facilities = facilities;
    // for(let i = 0; i < this.facilities.length; i++){
    //   this.facilities[i].instrumentList = this.instrumentList.filter(s => s.facilityId == this.facilities[i].id);
    // }
  }

  pickFacility(facility: Facility) {
    this.pickedFacilityName = facility.name;
  }

  addDummyFacility(){
    this.facilities.push({id:-1,name:"Some dummy facility", active:true, description:"",instrumentList: []});
  }
}
