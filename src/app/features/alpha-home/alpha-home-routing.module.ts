import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'ag-grid',
    component: AgGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlphaHomeRoutingModule { }
