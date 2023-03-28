import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Facility } from '../models/facilities';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  currentId: number = 0;

  constructor(private route: ActivatedRoute) {
    this.currentId = this.route.snapshot.params['facilityId'];
  }

  ngOnInit(): void {
    // const mapper = this.route.snapshot.paramMap;
    // this.currentId = Number(mapper.get("id"));
    // this.currentId = this.route.snapshot.params['facilityId'];
    // this.facilities = facilities.filter(f => f.id == this.currentId)[0];
  }

}
