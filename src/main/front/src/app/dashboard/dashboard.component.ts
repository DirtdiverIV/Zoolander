import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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

  soundUrls: string[] = [
    '../assets/sounds/felids.mp3', 
    '../assets/sounds/canids.mp3', 
    '../assets/sounds/reptile.mp3', 
    '../assets/sounds/mapache.mp3', 
    '../assets/sounds/conejos.mp3'  
  ];

  


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
  
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  playSound(familyId: number) {
    if (familyId >= 1 && familyId <= this.soundUrls.length) {
      const soundIndex = familyId - 1;
      const soundUrl = this.soundUrls[soundIndex];
      this.audioPlayer.nativeElement.src = soundUrl;
      this.audioPlayer.nativeElement.load();
      this.audioPlayer.nativeElement.play();
    }
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
