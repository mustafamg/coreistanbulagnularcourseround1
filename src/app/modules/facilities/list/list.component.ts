import { Component } from '@angular/core';
import { Instrument } from '../../instruments/models/instruments';
import { Facility } from '../models/facilities';
import { FacilityService } from '../services/facility.service';
import { MatDialog } from '@angular/material/dialog';
import { AddFacilityDialogComponent } from '../add-facility-dialog/add-facility-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { config } from 'rxjs';

@Component({
  selector: 'app-facilities-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [FacilityService]
})

export class ListComponent {
  facilityList: Facility[] = [];
  displayedColumns = ['id', 'name', 'description', 'instruments', 'action'];
  constructor(
    private facilityService: FacilityService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) {
    this.showFacilities();
  }

  showFacilities() {
    this.facilityService.get().subscribe(data => {
      this.facilityList = data;
    });
  }

  openAddDialog() {
    this.dialog.open(AddFacilityDialogComponent, { width: '75%' }).afterClosed().subscribe(_ => {
      this.showFacilities();
    });
  }

  editFacility(item: Facility) {
    this.dialog.open(AddFacilityDialogComponent, { data: item, width: '75%' }).afterClosed().subscribe(_ => {
      this.showFacilities();
    });
  }

  deleteFacility(id: number) {
    this.facilityService.delete(id).subscribe(_ => {
      this.snackBar.open('Facility Deleted', undefined, { duration: 3000, horizontalPosition: 'end' });
      this.showFacilities();
    })
  }
}
