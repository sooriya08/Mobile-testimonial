import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Testinmony } from '../app/Models/testimony';

@Injectable({
  providedIn: 'root',
})
export class TestimonialService {
  constructor(private http: HttpClient) {}

  getTestimony(): Observable<Testinmony[]> {
    return this.http.get<Testinmony[]>(
      'https://5f59f40eb121580016cadfef.mockapi.io/api/testimony'
    );
  }
}
