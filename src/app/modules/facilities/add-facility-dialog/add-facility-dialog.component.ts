import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacilityService } from '../services/facility.service';
import { Facility } from '../models/facilities';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-facility-dialog',
  templateUrl: './add-facility-dialog.component.html',
  styleUrls: ['./add-facility-dialog.component.css']
})
export class AddFacilityDialogComponent {
  isNew = true;
  facilityForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: FacilityService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Facility,
  ) {
    this.isNew = (data?.id ?? 0) == 0;
    this.facilityForm = this.fb.group({
      id: [this.isNew ? undefined : data.id],
      name: [this.isNew ? '' : data.name, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      description: [this.isNew ? '' : data.description],
    });
  }

  saveFacility() {
    let form = this.facilityForm;
    if (!form.valid) {
      return;
    }
    let action = this.isNew ? this.service.post(form.value as Facility) : this.service.put(form.value as Facility);

    action.subscribe(() => {
      let message = this.isNew ? 'Facility Added' : 'Facility Edited';
      this.snackBar.open(message, undefined, { duration: 3000, horizontalPosition: 'end' });
      this.dialog.closeAll();
    });
  }
}
