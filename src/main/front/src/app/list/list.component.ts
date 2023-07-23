import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalsService } from '../animals.service';
import { FamilyService } from '../family.service';
import { DatePipe } from '@angular/common';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [DatePipe]
})
export class ListComponent implements OnInit {
  apiData: any[] = [];
  tableColumns: string[] = ['id', 'name', 'type', 'gender', 'families_id', 'continents_id', 'date', 'img_url'];
  selectedFamilyId: number | null = null;
  filteredData: any[] = [];

  constructor(
    private animalsService: AnimalsService,
    private familyService: FamilyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const familyId = Number(params.get('familyId'));
      this.familyService.setSelectedFamilyId(familyId);
      this.selectedFamilyId = familyId;
      this.loadAnimals();
    });

    // Llamamos a la API
    this.animalsService.getAnimals().subscribe(data => {
      this.apiData = data;
    });
  }

  loadAnimals() {
    if (this.selectedFamilyId !== null) {
      this.animalsService.getAnimalsByFamily(this.selectedFamilyId).pipe(
        map(data => data.filter(item => item.family && item.family.id === this.selectedFamilyId))
      ).subscribe(data => {
        this.filteredData = data;
      });
    }
  }

  onDeleteAnimal(animalId: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este animal?')) {
      this.animalsService.deleteAnimal(animalId).subscribe(
        () => {
          console.log('Animal deleted successfully');
          this.loadAnimals();
        },
        (error) => {
          console.error('Error deleting animal', error);
          // Aquí puedes mostrar un mensaje de error si la eliminación no fue exitosa.
        }
      );
    }
  }
}
