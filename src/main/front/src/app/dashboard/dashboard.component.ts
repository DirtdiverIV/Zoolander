import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  animalCount: number = 0;

  constructor() {
    this.showAnimalCount();
  }

  async showAnimalCount() {
    try {
      const response = await axios.get('http://localhost:8000/animals') 
      this.animalCount = response.data.length;
    } catch (error) {
      console.error('Error fetching animal count:', error);
    }
  }
 
}
