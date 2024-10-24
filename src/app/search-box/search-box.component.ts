import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent {

  constructor(private productsComponent: ProductsComponent) { }
  ngOnInit(): void {
    
  }
  searchQuery: string = '';

search(){
  const query = this.searchQuery;
  this.productsComponent.search(query)
}
}
