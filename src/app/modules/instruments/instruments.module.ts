import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

import { InstrumentsRoutingModule as InstrumentsRoutingModule } from './instruments-routing.module';
import { ListComponent } from './list/list.component';
import { InstrumentsComponent } from './instruments.component';
import { AddInstrumentDialogComponent } from './add-instrument-dialog/add-instrument-dialog.component';


@NgModule({
  declarations: [
    InstrumentsComponent,
    ListComponent,
    AddInstrumentDialogComponent
  ],
  imports: [
    CommonModule,
    InstrumentsRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatSnackBarModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatCardModule,
  ]
})
export class InstrumentsModule { }
