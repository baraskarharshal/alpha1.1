import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlphaHomeRoutingModule } from './alpha-home-routing.module';
import { HomeComponent } from './home/home.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [HomeComponent, AgGridComponent],
  imports: [
    CommonModule,
    AlphaHomeRoutingModule,
    AgGridModule.withComponents([])
  ]
})
export class AlphaHomeModule { }
