import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdoptedService {

  constructor(private http: HttpClient) { }

  newCharity(id: string, userId: string) {
    const body = new URLSearchParams();
    body.set('userId', userId);

    return this.http.post(`http://localhost:5000/api/adopted/${id}`, body, { withCredentials: true});
  }

  getCharities() {
    return this.http.get('http://localhost:5000/api/adopted',{ withCredentials: true });
  }

}