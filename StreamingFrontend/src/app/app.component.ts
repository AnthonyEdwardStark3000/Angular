// import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { GridApi, GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AgGridAngular],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy{

  constructor() { }
  private eventSource: EventSource | null = null; 
  gridApi: GridApi | undefined;
  
  rowData:any = [];
  colDefs: ColDef[] = [
    { field: "albumId" },
    { field: "id" },
    { field: "title" },
    { field: "url" },
    { field: "thumbnailUrl" }
  ];
  onGridReady(params: any) {
    this.eventSource = new EventSource(this.Url);
    this.eventSource.onmessage = (event) => {
      this.rowData = event.data;
      this.gridApi = params.api;
      this.gridApi?.sizeColumnsToFit();
      this.gridApi?.refreshCells();
      console.log('New message:', this.rowData);
    };

    this.eventSource.onerror = (error) => {
      console.error('Error occurred:', error);
      this.eventSource?.close();
    };
  //  this.rowData = [{"albumId":"3","id":"101","title":"incidunt alias vel enim","url":"https://via.placeholder.com/600/e743b","thumbnailUrl":"https://via.placeholder.com/150/e743b"}];  
  console.log(this.rowData); 
  
  }

  Url:any = "http://localhost:5246/api/Home/stream";
  ngOnInit(): void {
    // this.eventSource = new EventSource(this.Url);
    // this.eventSource.onmessage = (event) => {
    //   console.log('New message:', event.data);
    //   this.rowData = event.data;
    // };

    // this.eventSource.onerror = (error) => {
    //   console.error('Error occurred:', error);
    //   this.eventSource?.close();
    // };
  }

  ngOnDestroy(): void {
    if (this.eventSource) {
      this.eventSource.close();
    }
  }
}
