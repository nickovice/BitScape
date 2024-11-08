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
deleteProduct(arg0: any) {
throw new Error('Method not implemented.');
}
editProduct(arg0: any) {
throw new Error('Method not implemented.');
}

  categories: Category[] = []
  products: Product[] = [];

  constructor(private productDataService: ProductDataService) { }
  
  ngOnInit(): void {
    this.productDataService.getAllCategories().subscribe(
      categories => this.categories = categories
    );
    this.productDataService.getAllProducts().subscribe(products => {
      this.products = products;})
  }


  onCreateProduct(form: NgForm) {
    if (form.valid) {
      const categoryId = Number(form.value.category);  // Convertir a número
      const product: Product = {
        name: form.value.name,
        brand: form.value.brand,
        price: form.value.price,
        info: form.value.info,
        image: form.value.image,
        category: categoryId  // Asegurarse de enviar el número
      };

      this.productDataService.createProduct(product).subscribe(message => console.log("console log del suscribe" + message));  // Aquí se procesan los datos del formulario
      console.log(form.value)
    } else {
      console.log('Formulario no válido');
    }
  }

}
