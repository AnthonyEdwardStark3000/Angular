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
   rowData = [];
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
    this.gridApi.exportDataAsCsv({fileName: 'export.csv'});
  }
}

downloadPdf(){
  var doc = new jsPDF('p', 'pt', 'letter')
  var body = [
             ['AlbumId', 'Id', 'Title', 'Url',"ThumbnailUrl"],
             [1, 12,'I-phone', "apple.com", 'appleImage'],
             [2, 13,'j-phone', "j.com", 'jImage'],
             [3, 14,'k-phone', "k.com", 'kImage'],
             [4, 15,'l-phone', "l.com", 'lImage'],
             [5, 16,'m-phone', "m.com", 'mImage'],
             [6, 17,'n-phone', "n.com", 'nImage'],
             ]
  var y = 10;
  doc.setLineWidth(2);
  autoTable(doc,{
      body: body,
      startY: 70,
      theme: 'grid',})
  doc.save('auto_table_with_javascript_data');
}

 constructor(private http:HttpClient){}
 ngOnInit(){
    this.http.get<any>('https://jsonplaceholder.typicode.com/photos').subscribe(data=>{
      this.rowData = data;
      let values = Object.values(data);
      for(let val of values){
        console.log(val);
      }
    });
 }
}
