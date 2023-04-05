import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { Facility } from '../models/facilities';
import { FacilityService } from '../services/facility.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[RxFormBuilder]
})
export class EditComponent {
  currentId: number = 0;

  facilityForm = this.fb.group({
    id: [0],
    name: ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(100) ]],
    description: [''],
  });

  constructor(
    private fb: FormBuilder,
     private service:FacilityService, 
      private route: ActivatedRoute,
     private router:Router) {
    this.currentId = this.route.snapshot.params['facilityId'];
    this.service.getById(this.currentId).subscribe((data: Facility) => {
      this.facilityForm.patchValue(data);
    });
  }

  createFacility() {
    if (!this.facilityForm.valid) {
      return;
    }
    this.service.post(this.facilityForm.value as Facility).subscribe(()=> {
      this.router.navigate(['/facilities/list']);
    });
  }

  addInstrument() {
    //TODO: Open a dialog to add an instrument
  }
}
