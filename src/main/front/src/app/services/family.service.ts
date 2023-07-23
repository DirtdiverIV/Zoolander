import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {
  private selectedFamilyIdSource = new Subject<number | null>();
  selectedFamilyId$ = this.selectedFamilyIdSource.asObservable();

  setSelectedFamilyId(familyId: number | null) {
    this.selectedFamilyIdSource.next(familyId);
  }
}
