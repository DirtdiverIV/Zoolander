import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContinentService {
  private apiUrl = 'http://localhost:8000'; // Ajusta la URL de la API según tu configuración

  constructor(private http: HttpClient) { }

  // Esta función obtiene todos los continentes desde el servidor
  getAllContinents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/continents`);
  }
}