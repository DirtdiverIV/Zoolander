import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Axios from 'axios'; // Importa 'Axios' en lugar de 'axios'
import { ContinentService } from '../continents.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  animalCount: number = 0;
  families: any[] = [];
  familiesData: any[] = [];
  continentsData: any[] = [];

  constructor(private http: HttpClient, private continentService: ContinentService) {}

  ngOnInit(): void {
    this.showAnimalCount();
    this.getFamiliesData();
    this.getContinentsData();
  }

  async showAnimalCount() {
    try {
      const responseAnimals = await Axios.get('http://localhost:8000/animals'); // Utiliza 'Axios' en lugar de 'axios'
      this.animalCount = responseAnimals?.data?.length ?? 0;
    } catch (error) {
      console.error('Error fetching animal count:', error);
    }
  }

  getFamiliesData(): void {
    this.http.get<any[]>('http://localhost:8000/families')
      .subscribe(data => {
        this.families = data;
        this.familiesData = data.map(family => ({
          ...family,
          imgUrl: `../assets${family.imgUrl}`
        }));
      });
  }
  getContinentsData(): void {
    this.continentService.getAllContinents().subscribe(
      (continents: any[]) => {
        this.continentsData = continents; // Almacenamos los datos de los continentes en la variable continentsData
      },
      (error) => {
        console.error('Error fetching continents data:', error);
      }
    );
  }
}
