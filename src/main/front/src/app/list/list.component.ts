import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  apiData: any[] = []; // Creamos un array vacio para que lo rellene como un bollicao
  tableColumns: string[] = ['id', 'name', 'type', 'gender', 'families_id', 'continents_id', 'date', 'img_url'];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // LLamamos a la api
    this.http.get<any[]>('http://localhost:8000/animals')
      .subscribe(data => {
        this.apiData = data;
      });
  }
}
