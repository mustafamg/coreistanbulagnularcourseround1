import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { FacilitiesComponent } from './facilities.component';
import { ListComponent } from './list/list.component';
import { CreateFacilityComponent } from './create-facility/create-facility.component';

const routes: Routes = [
  { path: '', component: FacilitiesComponent, 
    children: [
      { path: 'list', component: ListComponent },
      { path: 'details/:facilityId', component: DetailsComponent },
      { path: 'edit/:facilityId', component: EditComponent },
      { path: 'create', component: CreateFacilityComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full'}
  ]}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilitiesRoutingModule { }
