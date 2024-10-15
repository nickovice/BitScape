import { Component } from '@angular/core';
import { Product } from './product';
import { ProductDetailService } from '../../product-detail.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  product: Product | null = null;

  constructor(private productDetailService: ProductDetailService) { }
  ngOnInit(): void{
    this.loadData();
  }

  loadData(): void {
    this.productDetailService.getOne().subscribe(product => this.product = product);

  }
}
