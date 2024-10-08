import { Component, HostListener, OnInit } from '@angular/core';
import { ProductCard } from './productCard';
import { Category } from './category';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  productsCards: ProductCard[] = [
    {
      name: "Ryzen 9 5950X",
      img: "https://i.imgur.com/sHNgeuI.jpeg",
      price: 123,
      id: 1
    },
    {
      name: "Intel Core i9 14900",
      img: "https://http2.mlstatic.com/D_NQ_NP_632174-MLU78933066918_092024-O.webp",
      price: 100,
      id: 2
    },
    {
      name: "blabla",
      img: "https://acf.geeknetic.es/imgw/imagenes/auto/2022/5/10/mrc-como-elegir-el-procesador-ideal-para-tu-pc.jpg?f=webp",
      price: 120,
      id: 2
    },
    {
      name: "blabla",
      img: "https://acf.geeknetic.es/imgw/imagenes/auto/2022/5/10/mrc-como-elegir-el-procesador-ideal-para-tu-pc.jpg?f=webp",
      price: 121,
      id: 2
    },
    {
      name: "blabla",
      img: "https://acf.geeknetic.es/imgw/imagenes/auto/2022/5/10/mrc-como-elegir-el-procesador-ideal-para-tu-pc.jpg?f=webp",
      price: 121,
      id: 2
    }
    
  ]

  categories: Category[] = [
    {
      name: "CPUs"
    },
    {
      name: "CPUs AMD"
    },
    {
      name: "CPUs Intel"
    },
    {
      name: "GPUs"
    },
    {
      name: "GPUs AMD"
    },
    {
      name: "GPUs Nvidia"
    },
    {
      name: "RAMs"
    },
    {
      name: "RAM DDR4"
    },
    {
      name: "RAM DDR5"
    },
    {
      name: "Motherboards"
    },
    {
      name: "Motherboards AMD"
    },
    {
      name: "Motherboards Intel"
    },
    {
      name: "Almacenamiento"
    },
    {
      name: "HDDs"
    },
    {
      name: "SSDs"
    },
    {
      name: "Fuentes"
    },
    {
      name: "Gabinetes"
    },
    {
      name: "Refrigeracion"
    },
    {
      name: "Refrigeracion por aire"
    },
    {
      name: "Refrigeracion AIO"
    },
  ]

  constructor() { }
  ngOnInit(): void{}
}