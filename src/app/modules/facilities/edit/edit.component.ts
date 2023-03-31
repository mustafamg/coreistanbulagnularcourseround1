import { Component } from '@angular/core';
import { FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IFormGroup, RxFormBuilder } from '@rxweb/reactive-form-validators';

import { Facility, FacilityEditModel } from '../models/facilities';
import { FacilityService } from '../services/facility.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[RxFormBuilder]
})
export class EditComponent {
  facilityForm = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(100) ]],
    description: [''],
  });

  constructor(private fb: FormBuilder, private service:FacilityService, private router:Router) {
      
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
