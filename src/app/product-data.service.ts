import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCard } from './products/productCard';
import { Category } from './products/category';
import { Brand } from './products/brand';

const url = "https://bitscape-api.onrender.com";

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }
  
  getAllProducts(): Observable<ProductCard[]> { 
    return this.http.get<ProductCard[]>(url + '/products');
  }
  getAllCategories(): Observable<Category[]> { 
    return this.http.get<Category[]>(url + '/categories');
  }
  getAllBrands(): Observable<Brand[]> { 
    return this.http.get<Brand[]>(url + '/products');
  }
}
