import { Component } from '@angular/core';
import { FamilyService } from '../family.service';

@Component({
  selector: 'app-family-selection',
  templateUrl: './family-selection.component.html',
  styleUrls: ['./family-selection.component.scss']
})
export class FamilySelectorComponent {
  selectedFamilyId: number | null = null;

  constructor(private familyService: FamilyService) { }

  selectFamily(familyId: number | null) {
    this.selectedFamilyId = familyId;
    this.familyService.setSelectedFamilyId(this.selectedFamilyId);
  }
}
