import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { GridApi, GridOptions } from 'ag-grid-community';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AgGridAngular,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
   rowData = [
   { make: "Tesla", model: "Model Y", price: 64950, electric: true },
   { make: "Ford", model: "F-Series", price: 33850, electric: false },
   { make: "Toyota", model: "Corolla", price: 29600, electric: false },
 ];
 gridApi: GridApi | undefined; // Initialize as undefined

 colDefs: ColDef[] = [
   { field: "albumId" },
   { field: "id" },
   { field: "title" },
   { field: "url" },
   { field: "thumbnailUrl" }
 ];
 onGridReady(params: any) {
  this.gridApi = params.api;
}

downloadCsv() {
  if (this.gridApi) {
    const doc = new jsPDF();
    this.gridApi.exportDataAsCsv({fileName: 'export.csv'});
  }
}

downloadPdf(){
  
}

 constructor(private http:HttpClient){}
 ngOnInit(){
  
    this.http.get<any>('https://jsonplaceholder.typicode.com/photos').subscribe(data=>{
      this.rowData = data;
    });
 }
}
