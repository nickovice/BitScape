import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductDataService } from '../product-data.service';
import { Category } from '../products/category';
import { Product } from './product';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  categories: Category[] = []
  products: Product[] = [];

  constructor(private productDataService: ProductDataService) { }

  ngOnInit(): void {
    this.productDataService.getAllCategories().subscribe(
      categories => this.categories = categories
    );
    this.productDataService.getAllProducts().subscribe(products => {
      this.products = products;
    })
  }

  onCreateProduct(form: NgForm) {
    if (form.valid) {
      const categoryId = Number(form.value.category);
      const product: Product = {
        name: form.value.name,
        brand: form.value.brand,
        price: form.value.price,
        info: form.value.info,
        image: form.value.image,
        category: categoryId
      };

      this.productDataService.createProduct(product).subscribe(response => { alert(response.message); window.location.reload(); });
    }
  }

  onDeleteProduct(id: number | undefined) {
    this.productDataService.deleteProduct(id).subscribe(response => { alert(response.message); window.location.reload(); });
  }

  onCreateCategory(form: NgForm) {
    if (form.valid) {
      const category: Category = {
        name: form.value.namee,
        info: form.value.infoo
      };
  
      this.productDataService.createCategory(category).subscribe(response => {
        alert(response.message);
        window.location.reload();
      });
    }
  }
  
  onDeleteCategory(id: number | undefined) {
    this.productDataService.deleteCategory(id).subscribe(response => { alert(response.message); window.location.reload(); });
  }

}
