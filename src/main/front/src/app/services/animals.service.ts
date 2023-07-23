import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  private apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getAnimals(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/animals`).pipe(
      tap(data => console.log('Animals data:', data))
    );
  }

  getAnimalsByFamily(familyId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/animals?familyId=${familyId}`).pipe(
      tap(data => console.log('Animals data for family:', data))
    );
  }
  getAnimalsByContinent(continentId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/animals?continentId=${continentId}`).pipe(
      tap(data => console.log('Animals data for family:', data))
    );
  }
  getAnimalById(animalId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/animals/${animalId}`);
  }

  updateAnimal(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/animals/${id}`, data);
  }
  deleteAnimal(animalId: number): Observable<any> {
    const url = `${this.apiUrl}/animals/${animalId}`;
    return this.http.delete(url);
  }
}
