/*import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-testdb',
  templateUrl: './testdb.component.html',
  styleUrls: ['./testdb.component.scss']
})
export class TestdbComponent implements OnInit {
  tableData: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData(): void {
    this.http.get<any[]>('http://localhost:8000/users')
      .subscribe(data => {
        this.tableData = data;
      });
  }
}*/

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-testdb',
  templateUrl: './testdb.component.html',
  styleUrls: ['./testdb.component.scss']
})
export class TestDBComponent implements OnInit {
  familiesImages: string[] = [];
  families: any[] = [];
  familiesData: any[] = [];
  animals: any[] = [];
  animalsData: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getFamiliesImages();
    this.getFamilies();
    this.getFamiliesData();
    this.getAnimalsData();
  }

  async getFamiliesImages(): Promise<void> {
    try {
      const response = await this.http.get<any[]>('http://localhost:8000/families').toPromise();
      console.log('Response:', response);
      if (response) {
        this.familiesImages = response.map(family => family.imgUrl);
      } else {
        console.log('Response is undefined');
      }
    } catch (error) {
      console.log('Error retrieving families images:', error);
    }
  }

  getFamilies(): void {
    this.http.get<any[]>('http://localhost:8000/families')
      .subscribe(
        (response) => {
          this.families = response;
        },
        (error) => {
          console.log('Error retrieving families:', error);
        }
      );
  }

  getFamiliesData(): void {
    this.http.get<any[]>('http://localhost:8000/families').subscribe(
      (response) => {
        this.familiesData = response;
      },
      (error) => {
        console.log('Error retrieving families data:', error);
      }
    );
  }
  getAnimalsData(): void {
    this.http.get<any[]>('http://localhost:8000/animals').subscribe(
      (response) => {
        this.animalsData = response.map(item => {
          item.date = new Date(item.date).toLocaleDateString();
          item.families_id = item.family.id;
          item.continents_id = item.continent.id;
          item.img_url = item.imgUrl;
          return item;
        });
      },
      (error) => {
        console.log('Error retrieving animals data:', error);
      }
    );
  }
}