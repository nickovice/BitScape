import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCard } from './products/productCard';
import { Category } from './products/category';
import { Product } from './admin/product';
import { environment } from '../environments/environment'; // 👈 importa el environment

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  // Usa la URL base del environment
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
  
  getAllProducts(): Observable<Product[]> { 
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }

  getAllCategories(): Observable<Category[]> { 
    return this.http.get<Category[]>(`${this.baseUrl}/categories`);
  }

  getProductsByCategory(category_id: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products?category=${category_id}`);
  }

  getProductsByBrand(brand: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products?brand=${brand}`);
  }

  search(query: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products?search=${query}`);
  }

  createProduct(product: Product): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/products`, product);
  }

  deleteProduct(id: number | undefined): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/products/${id}`);
  }

  deleteCategory(id: number | undefined): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/categories/${id}`);
  }

  createCategory(category: Category): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/categories`, category);
  }
}
