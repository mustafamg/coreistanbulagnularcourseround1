import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Instrument } from '../models/instruments';
import { InstrumentService } from '../services/instrument.service';
import { AddInstrumentDialogComponent } from '../add-instrument-dialog/add-instrument-dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  instrumentList: Instrument[] = [];
  displayedColumns = ['id', 'name', 'description', 'facility', 'action'];
  constructor(
    private instrumentService: InstrumentService,
    private dialog: MatDialog,
  ) {
    this.getData();
  }

  getData() {
    this.instrumentService.get().subscribe(data => {
      this.instrumentList = data;
    });
  }

  addDummyInstrument() {
    let instrument: Instrument = 
    {
      id: undefined,
      name: "Test Name",
      description: "Test Description",
      facilityId: 1,
      facility: undefined
    };
    this.instrumentService.post(instrument).subscribe(() => {
      this.getData();
    });
  }

  addInstrument(){
    this.dialog.open(AddInstrumentDialogComponent);
  }
}
