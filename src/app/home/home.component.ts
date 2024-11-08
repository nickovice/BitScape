import { Component, OnInit } from '@angular/core';
import { Card } from './card'
import { Product } from '../admin/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  
  cards: Card[] = [
    {
      name: "Ryzen 9 5950X",
      img: "https://i.imgur.com/sHNgeuI.jpeg"
    },
    {
      name: "Intel Core i9 14900",
      img: "https://http2.mlstatic.com/D_NQ_NP_632174-MLU78933066918_092024-O.webp"
    },
    {
      name: "ASUS ROG Crosshair X670E Hero",
      img: "https://http2.mlstatic.com/D_NQ_NP_917440-MLA52081654076_102022-O.webp"
    },
    {
      name: "Nvidia RTX 4090",
      img: "https://i.ebayimg.com/images/g/y7YAAOSwt0Nk73zs/s-l1600.jpg"
    },
  ]
  constructor() { }
  ngOnInit(): void{}
}

