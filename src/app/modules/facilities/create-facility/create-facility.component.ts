import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FacilityService } from '../services/facility.service';
import { Facility } from '../models/facilities';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent {
facilityForm = this.fb.group({
name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
description: [''],
});
constructor(private fb: FormBuilder, 
  private service:FacilityService,
  private router:Router) {

 }

 createFacility() {
    if (!this.facilityForm.valid) {
      return;
    }
    console.log(this.facilityForm.value);
    this.service.post(this.facilityForm.value as Facility).subscribe(()=> {
      this.router.navigate(['/facilities/list']);
    });
  }
}
