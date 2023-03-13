import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { facilities, Facility } from '../models/facilities';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  currentId: number = 0;
  facility: Facility;

  constructor(private route: ActivatedRoute) {
    this.currentId = this.route.snapshot.params['facilityId'];
    this.facility = facilities.filter(f => f.id == this.currentId)[0];
  }

  ngOnInit(): void {
    // const mapper = this.route.snapshot.paramMap;
    // this.currentId = Number(mapper.get("id"));
    // this.currentId = this.route.snapshot.params['facilityId'];
    // this.facilities = facilities.filter(f => f.id == this.currentId)[0];
  }

}
