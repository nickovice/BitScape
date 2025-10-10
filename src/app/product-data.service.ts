import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCard } from './products/productCard';
import { Category } from './products/category';
import { NgForm } from '@angular/forms';
import { Product } from './admin/product';

const url = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }
  
  getAllProducts(): Observable<Product[]> { 
    return this.http.get<Product[]>(url + '/products');
  }

  getAllCategories(): Observable<Category[]> { 
    return this.http.get<Category[]>(url + '/categories');
  }

  getProductsByCategory(category_id: string): Observable<Product[]>{
    return this.http.get<Product[]>(url + '/products?category=' + category_id);
  }

  getProductsByBrand(brand: string): Observable<Product[]>{
    return this.http.get<Product[]>(url + '/products?brand=' + brand);
  }

  search(query: string){
    return this.http.get<Product[]>(url + '/products?search=' + query);
  }

  createProduct(product:Product) {
    return this.http.post<any>(url + '/products', product);
  }

  deleteProduct(id: number | undefined) {
    return this.http.delete<any>(url + '/products/' + id);
  }

  deleteCategory(id: number | undefined) {
    return this.http.delete<any>(url + '/categories/' + id);
  }

  createCategory(category: Category){
    return this.http.post<any>(url + '/categories', category);
  }


}
