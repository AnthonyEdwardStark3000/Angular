// // import { HttpClient } from '@angular/common/http';
// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
// import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
// import { GridApi, GridOptions } from 'ag-grid-community';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet,AgGridAngular],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent implements OnInit, OnDestroy{

//   constructor() { }
//   private eventSource: EventSource | null = null; 
//   gridApi: GridApi | undefined;
  
//   rowData:any = [];
//   colDefs: ColDef[] = [
//     { field: "albumId" },
//     { field: "id" },
//     { field: "title" },
//     { field: "url" },
//     { field: "thumbnailUrl" }
//   ];
//   onGridReady(params: any) {
//     this.eventSource = new EventSource(this.Url);
//     this.eventSource.onmessage = (event) => {
//       this.rowData = event.data;
//        this.gridApi = params.api;
//         this.gridApi?.sizeColumnsToFit();
//         this.gridApi?.refreshCells();
//       console.log('New message:', this.rowData);
//       this.gridApi?.applyTransaction({ add: this.rowData });
//     };

//     this.eventSource.onerror = (error) => {
//       console.error('Error occurred:', error);
//       this.eventSource?.close();
//     };
//   //  this.rowData = [{"albumId":"3","id":"101","title":"incidunt alias vel enim","url":"https://via.placeholder.com/600/e743b","thumbnailUrl":"https://via.placeholder.com/150/e743b"}];  
//   // console.log(this.rowData); 
  
//   }

//   Url:any = "http://localhost:5246/api/Home/stream";
//   ngOnInit(): void {
//     // this.eventSource = new EventSource(this.Url);
//     // this.eventSource.onmessage = (event) => {
//     //   console.log('New message:', event.data);
//     //   this.rowData = event.data;
//     // };

//     // this.eventSource.onerror = (error) => {
//     //   console.error('Error occurred:', error);
//     //   this.eventSource?.close();
//     // };
//   }

//   ngOnDestroy(): void {
//     if (this.eventSource) {
//       this.eventSource.close();
//     }
//   }
// }
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef, GridApi } from 'ag-grid-community'; // Column Definition Type Interface
import { Subject } from 'rxjs'; // Import RxJS Subject
import { filter } from 'rxjs/operators'; // Import operators if needed

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AgGridAngular],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private eventSource: EventSource | null = null; 
  private dataSubject = new Subject<any[]>(); // Subject to handle the data stream
  private gridApi!: GridApi; // Ensure gridApi is defined correctly
  
  rowData: any[] = []; // Define rowData as an array of objects
  colDefs: ColDef[] = [
    { field: "albumId" },
    { field: "id" },
    { field: "title" },
    { field: "url" },
    { field: "thumbnailUrl" }
  ];

  constructor() { }

  ngOnInit(): void {
    // Subscribe to the data stream
    this.dataSubject.asObservable().subscribe({
      next: (data) => {
        console.log('New message received:', data);
        if (this.gridApi) {
          this.gridApi.applyTransaction({ add: data });
          this.gridApi.sizeColumnsToFit(); // Adjust columns
          this.gridApi.refreshCells(); // Refresh cells if necessary
        }
      },
      error: (err) => console.error('Subscription error:', err),
      complete: () => console.log('Data stream completed')
    });
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit(); // Initialize grid columns to fit

    this.eventSource = new EventSource(this.Url);

    this.eventSource.onmessage = (event) => {
      try {
        // Ensure data is in the correct format
        const data = JSON.parse(event.data);

        // Check if the data is an array of objects
        if (Array.isArray(data)) {
          this.dataSubject.next(data); // Emit data to subscribers
        } else {
          console.error('Received data is not in the expected format:', data);
        }
      } catch (e) {
        console.error('Error parsing event data:', e);
      }
    };

    this.eventSource.onerror = (error) => {
      console.error('EventSource error:', error);
      this.eventSource?.close(); // Close on error
    };
  }

  Url: string = "http://localhost:5246/api/Home/stream";

  ngOnDestroy(): void {
    if (this.eventSource) {
      this.eventSource.close();
    }
    // Optionally, complete the subject if needed
    this.dataSubject.complete();
  }
}
