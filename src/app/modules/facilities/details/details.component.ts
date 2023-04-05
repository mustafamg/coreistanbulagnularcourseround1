import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Facility } from '../models/facilities';
import { FacilityService } from '../services/facility.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  currentId: number = 0;
  facility: Facility = {} as Facility;
  constructor(private route: ActivatedRoute, private service: FacilityService) {
    this.currentId = this.route.snapshot.params['facilityId'];
  }

  ngOnInit(): void {
    this.service.getById(this.currentId).subscribe((data: Facility) => {
      this.facility = data;
      //this.facilityForm.patchValue(data);
    });
  }

}
