import { Component } from '@angular/core';
import { Instrument } from '../../instruments/models/instruments';
import { Facility } from '../models/facilities';
import { FacilityService } from '../services/facility.service';

@Component({
  selector: 'app-facilities-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[FacilitiesService]
})

export class ListComponent{
  facilityList: Facility[] = [];
  displayedColumns = ['id', 'name', 'description', 'instruments', 'action'];
  constructor(
    private facilityService: FacilityService
  ) {
    this.showFacilities();
  }

  showFacilities() {
    this.facilityService.get().subscribe(data => {
      this.facilityList = data;
    });
  }

  addDummyFacility(){
    let dummyFacility : Facility = {
      id: undefined,
      name: "Some dummy facility",
      description: "",
      instrumentList: []
    }
    this.facilityService.post(dummyFacility).subscribe(_ => {
      this.showFacilities();
    })
  }
}
