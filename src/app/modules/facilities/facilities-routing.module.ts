import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacilitiesComponent } from './facilities.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', component: FacilitiesComponent, 
    children: [
      { path: 'list', component: ListComponent },
      { path: 'details', component: ListComponent },
  ]}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilitiesRoutingModule { }
