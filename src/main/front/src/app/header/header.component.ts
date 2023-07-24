import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  familiesData: any[] = []; 
  tableColumns: string[] = ['id', 'img_url', 'name'];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8000/families')
      .subscribe(data => {
        this.familiesData = data;
      });
  }
}
