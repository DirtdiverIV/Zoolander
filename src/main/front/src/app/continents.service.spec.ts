import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContinentService {
  private apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getAllContinents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/continents`);
  }
}
