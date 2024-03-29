import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params, Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient, private router: Router) {}
  productList = [];

  fetchProducts(): Observable<any> {
    return this.http.get('https://localhost:7065/api/VillaApi');
  }
  createVilla(villa): Observable<any> {
    return this.http.post('https://localhost:7065/api/VillaApi',villa);
  }
  fetchSingleVilla(id: Params) {
    return this.http.get(`https://localhost:7065/api/VillaApi/${id}`);
  }

  deleteVilla(id: Params) {
    return this.http.delete(`https://localhost:7065/api/VillaApi/${id}`);
  }

  updateVilla(id: number, updatedVilla: any) {
    console.log(id, updatedVilla);
    return this.http
      .put(`https://localhost:7065/api/VillaApi/${id}`, updatedVilla);
  }
}
