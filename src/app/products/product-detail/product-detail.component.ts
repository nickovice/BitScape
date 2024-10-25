import { Component } from '@angular/core';
import { Product } from './product';
import { ProductDetailService } from '../../product-detail.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  product: Product | null = null;

  constructor(private route: ActivatedRoute, private productDetailService: ProductDetailService) { }

  ngOnInit(): void{
    this.loadData();
  }

  loadData(): void {
    const productId = this.route.snapshot.paramMap.get('id');  // Obtener el 'id' de la URL
    if (productId) {
      this.productDetailService.getOne(productId).subscribe(product => this.product = product);
    }

  }
}
