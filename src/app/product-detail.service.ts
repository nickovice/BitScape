import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './products/product-detail/product';

const url = "https://bitscape-api.onrender.com/products/2";

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  constructor(private http: HttpClient) { }
  
  getOne(): Observable<Product> { 
    return this.http.get<Product>(url);
  }
}