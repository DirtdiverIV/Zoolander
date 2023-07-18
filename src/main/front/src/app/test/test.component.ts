import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  animals: any[] = [];
  families: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAnimals();
    this.getFamilies();
  }

  getAnimals() {
    this.http.get<any[]>('http://localhost:8000/animals').subscribe(
      (data) => {
        this.animals = data;
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }

  getFamilies() {
    this.http.get<any[]>('http://localhost:8000/families').subscribe(
      (data) => {
        this.families = data;
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}


