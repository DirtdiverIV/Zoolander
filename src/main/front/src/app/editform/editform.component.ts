import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalsService } from '../animals.service';

interface AnimalData {
  id: number;
  name: string;
  type: string;
  gender: string;
  family: {
    id: number;
    name: string;
    imgUrl: string;
  };
  continent: {
    id: number;
    name: string;
    imgUrl: string;
  };
  date: number;
  imgUrl: string;
}

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.scss']
})
export class EditformComponent implements OnInit {
  animalId: number | null = null;
  animalData: AnimalData = {
    id: 0,
    name: '',
    type: '',
    gender: '',
    family: {
      id: 0,
      name: '',
      imgUrl: ''
    },
    continent: {
      id: 0,
      name: '',
      imgUrl: ''
    },
    date: 0,
    imgUrl: ''
  };

  constructor(
    private route: ActivatedRoute,
    private animalsService: AnimalsService,
    private router: Router,
  ) {}

  onCancel() {
    this.router.navigate(['/dashboard']);
  }

  onApplyChanges() {
    this.animalsService.updateAnimal(this.animalId!, this.animalData).subscribe(
      (response) => {
        console.log('Animal updated successfully', response);
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Error updating animal', error);
        
      }
    );
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.animalId = Number(params.get('animalId'));

      if (this.animalId !== null) {
        this.animalsService.getAnimalById(this.animalId).subscribe(data => {
          this.animalData = data;
        });
      }
    });
  }
}
