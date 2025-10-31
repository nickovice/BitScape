import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './products/product-detail/product';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
  private url = environment.apiUrl + '/products/';

  constructor(private http: HttpClient) {}

  getOne(id: string): Observable<Product> { 
    return this.http.get<Product>(`${this.url}${id}`);
  }
}
