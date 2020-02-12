import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'alpha-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent implements OnInit {

  @ViewChild('agGrid', {static: false}) agGrid: AgGridAngular;
  columnDefs = [];
  rowData = [];

  constructor() { }

  ngOnInit() {
    this.columnDefs = [
      { headerName: 'Id', field: 'id', sortable: true, filter: true, editable: false, checkboxSelection: true, },
      { 
        headerName: 'Make', 
        field: 'make', 
        sortable: true, 
        filter: true, 
        editable: true,
      },
      { headerName: 'Model', field: 'model', sortable: true, filter: true, editable: true, },
      { headerName: 'Price', field: 'price', 'type':'number', sortable: true, filter: true, editable: true, }
    ];
  
    this.rowData = [
      { id: 1, make: 'Toyota', model: 'Celica', price: 35000 },
      { id: 2, make: 'Ford', model: 'Mondeo', price: 32000 },
      { id: 3, make: 'Porsche', model: 'Boxter', price: 72000 }
    ];
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  } 



}
