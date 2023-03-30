import { Component } from '@angular/core';
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
  facilityForm: IFormGroup<Facility>;

  constructor(fb: RxFormBuilder, private service:FacilityService) {
    this.facilityForm =
      fb.formGroup<Facility>(new FacilityEditModel({id:0})) as IFormGroup<Facility>;
  }

  createFacility() {
    if (!this.facilityForm.valid) {
      return;
    }
    this.service.post(this.facilityForm.value).subscribe();
  }

  addInstrument() {
    //TODO: Open a dialog to add an instrument
  }
}
