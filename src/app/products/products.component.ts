import { Component, HostListener, OnInit } from '@angular/core';
import { ProductCard } from './productCard';
import { Category } from './category';
import { ProductDataService } from '../product-data.service';
import { Brand } from './brand';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  productsCards: ProductCard[] = []

  categories: Category[] = []

  brands: Brand[] = []

  constructor(private productDataService: ProductDataService) { }
  ngOnInit(): void{
    this.loadData();
  }

  loadData(): void {
    this.productDataService.getAllProducts().subscribe(productsCards => this.productsCards = productsCards);
    this.productDataService.getAllCategories().subscribe(categories => this.categories = categories);
    this.productDataService.getAllBrands().subscribe(brands => this.brands = brands);
  }
}