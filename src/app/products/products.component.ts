import { Component, HostListener, OnInit } from '@angular/core';
import { ProductCard } from './productCard';
import { Category } from './category';
import { ProductDataService } from '../product-data.service';
import { Brand } from './brand';
import { SearchService } from '../search.service';
import { Product } from '../admin/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  productsCards: Product[] = []

  categories: Category[] = []

  brands: Brand[] = []

  constructor(private productDataService: ProductDataService, private searchService: SearchService) { }
  ngOnInit(): void {
    this.loadData();
    this.searchService.searchQuery.subscribe(query => {
      console.log(query);
      this.productDataService.search(query).subscribe(productsCards => this.productsCards = productsCards);
    }) 
  }


  loadData(): void {
    this.productDataService.getAllProducts().subscribe(productsCards => {
      this.productsCards = productsCards;
      this.brands = Array.from(new Set(productsCards.map(p => p.brand)))
                         .map(brand => ({ brand }));
    });
  
    this.productDataService.getAllCategories().subscribe(
      categories => this.categories = categories
    );
  }

  filterByCategory(category_id: string) {
    this.productDataService.getProductsByCategory(category_id).subscribe(productsCards => this.productsCards = productsCards);
  }

  filterByBrand(brand: string) {
    this.productDataService.getProductsByBrand(brand).subscribe(productsCards => this.productsCards = productsCards);
  }

  sort(order: string) {
    this.productsCards.sort((a: Product, b: Product) => {
      if (order == "asc") {
        return a.price - b.price
      }
      else {
        return b.price - a.price
      }
    })
  }


}