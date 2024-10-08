import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  products: Product[] = [
    {
      name: "Ryzen 9 5950X",
      img: "https://i.imgur.com/sHNgeuI.jpeg",
      price: 123,
      id: 1,
      info: "Ryzen 9 7900X ofrece 12 nÃºcleos y 24 hilos con una frecuencia mÃ¡xima de 5.60 GHz. Su TDP es de 170W y utiliza el socket AM5. Se basa en la arquitectura Zen 4 con proceso de fabricaciÃ³n de 5nm y 64MB de cachÃ© L3. Lanzado en 2022, no tiene GPU integrada."
    },
  ]
}
