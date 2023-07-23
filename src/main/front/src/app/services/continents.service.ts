import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContinentsService {
  private selectedContinentIdSource = new Subject<number | null>();
  selectedContinentId$ = this.selectedContinentIdSource.asObservable();

  setSelectedContinentId(continentId: number | null) {
    this.selectedContinentIdSource.next(continentId);
  }
}