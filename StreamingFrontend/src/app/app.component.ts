// import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy{
  private eventSource!: EventSource;


  constructor() { }

  Url:any = "http://localhost:5246/api/Home/stream";
  ngOnInit(): void {
    this.eventSource = new EventSource(this.Url);

    this.eventSource.onmessage = (event) => {
      console.log('New message:', event.data);
    };

    this.eventSource.onerror = (error) => {
      console.error('Error occurred:', error);
      this.eventSource.close();
    };
  }

  ngOnDestroy(): void {
    if (this.eventSource) {
      this.eventSource.close();
    }
  }
}
