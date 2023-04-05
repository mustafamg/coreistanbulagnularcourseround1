import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacilityService } from '../services/facility.service';
import { Facility } from '../models/facilities';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError } from 'rxjs/operators';
import { EMPTY, Observable, of } from 'rxjs';

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
    if (this.isNew) {
      form.value.id = 0;
      this.service.post(form.value as Facility).pipe(catchError(err=>handleError(err))).subscribe(() => handleResponse('Facility Added'));
    }
    else {
      this.service.put(form.value as Facility).pipe(catchError(err=>handleError(err))).subscribe(() => handleResponse('Facility Updated'));
    }

    const handleResponse = (message: string) => {
      this.snackBar.open(message, undefined, { duration: 3000, horizontalPosition: 'end' });
      this.dialog.closeAll();
    }
    const handleError = (error: any):Observable<never>  => {
      this.snackBar.open("error:" + error.message, undefined, { duration: 3000, horizontalPosition: 'end' });
      return EMPTY;
    }
  }
}
