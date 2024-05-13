import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from '../models/Animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) { }

  newAnimal(name: string, species: string, breed: string, description: string) {
    const body = new URLSearchParams();
    body.set('name', name);
    body.set('species', species);
    body.set('breed', breed);
    body.set('description', description);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post('http://localhost:5000/api/animals', body, {headers: headers, withCredentials: true});
  }

  editAnimal(animal: Animal) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post('http://localhost:5000/api/animals', animal, {headers: headers, withCredentials: true});
  }

  deleteAnimal(id: string) {
    return this.http.delete(`http://localhost:5000/api/animals/${id}`, {withCredentials: true});
  }

  getAnimals() {
    return this.http.get('http://localhost:5000/api/animals', {withCredentials: true});
  }

  getAnimalById(id: string) {
    return this.http.get(`http://localhost:5000/api/animals/${id}`, {withCredentials: true});
  }

}