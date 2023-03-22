import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';

import { FacilitiesRoutingModule } from './facilities-routing.module';
import { FacilitiesComponent } from './facilities.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    FacilitiesComponent,
    ListComponent,
    DetailsComponent,
    
  ],
  imports: [
    CommonModule,
    FacilitiesRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatCardModule,
    MatSnackBarModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
  ]
})
export class FacilitiesModule { }
