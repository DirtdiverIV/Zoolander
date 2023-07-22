import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../animals.service';
import { ContinentsService } from '../continents.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-continents',
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.scss'],
  providers: [DatePipe]
})
export class ContinentsComponent implements OnInit {
  apiData: any[] = [];
  tableColumns: string[] = ['id', 'name', 'type', 'gender', 'families_id', 'continents_id', 'date', 'img_url'];
  selectedContinentId: number | null = null;
  filteredData: any[] = [];

  constructor(
    private animalsService: AnimalsService,
    private continentsService: ContinentsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const continentId = Number(params.get('continentId'));
      this.continentsService.setSelectedContinentId(continentId);
      this.selectedContinentId = continentId;
      this.loadAnimals();
    });

    this.animalsService.getAnimals().subscribe(data => {
      this.apiData = data;
    });
  }


loadAnimals() {
  if (this.selectedContinentId !== null) {
    this.animalsService.getAnimalsByFamily(this.selectedContinentId).pipe(
      map(data => data.filter(item => item.continent && item.continent.id === this.selectedContinentId))
    ).subscribe(data => {
      this.filteredData = data;
    });
  }
}
}
