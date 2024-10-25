import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './products/product-detail/product';

const url = "https://bitscape-api.onrender.com/products/";

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  constructor(private http: HttpClient) { }
  
  getOne(id: string): Observable<Product> { 
    return this.http.get<Product>(url + id);
  }
}