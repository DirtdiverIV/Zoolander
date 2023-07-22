import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Axios from 'axios';
import { ContinentsService } from '../continents.service'; // Cambiar ContinentService a ContinentsService
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  animalCount: number = 0;
  familiesData: any[] = [];
  continentsData: any[] = [];

  constructor(
    private http: HttpClient,
    private continentsService: ContinentsService, // Cambiar ContinentService a ContinentsService
    private router: Router
  ) {}

  ngOnInit(): void {
    this.showAnimalCount();
    this.getFamiliesData();
    this.getContinentsData();
  }

  async showAnimalCount() {
    try {
      const responseAnimals = await Axios.get('http://localhost:8000/animals');
      this.animalCount = responseAnimals?.data?.length ?? 0;
    } catch (error) {
      console.error('Error fetching animal count:', error);
    }
  }

  getFamiliesData(): void {
    this.http.get<any[]>('http://localhost:8000/families')
      .subscribe(data => {
        this.familiesData = data.map(family => ({
          ...family,
          imgUrl: `../assets${family.imgUrl}`
        }));
      });
  }

  getContinentsData(): void {
    this.http.get<any[]>('http://localhost:8000/continents')
      .subscribe(
        (continents: any[]) => {
          this.continentsData = continents;
          console.log('Continents data:', this.continentsData);
        },
        (error) => {
          console.error('Error fetching continents data:', error);
        }
      );
  }

  selectContinent(continentId: number) {
    this.continentsService.setSelectedContinentId(continentId);
  }
}
