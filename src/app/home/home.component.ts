import { Component, OnInit } from '@angular/core';
import { Card } from './card'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  cards: Card[] = [
    {
      name: "Ryzen 9 5950X",
      img: "https://i.imgur.com/sHNgeuI.jpeg",
      id: 1
    },
    {
      name: "Intel Core i9 14900",
      img: "https://http2.mlstatic.com/D_NQ_NP_632174-MLU78933066918_092024-O.webp",
      id: 2
    },
    {
      name: "blabla",
      img: "https://acf.geeknetic.es/imgw/imagenes/auto/2022/5/10/mrc-como-elegir-el-procesador-ideal-para-tu-pc.jpg?f=webp",
      id: 2
    },
    {
      name: "blabla",
      img: "https://acf.geeknetic.es/imgw/imagenes/auto/2022/5/10/mrc-como-elegir-el-procesador-ideal-para-tu-pc.jpg?f=webp",
      id: 2
    },
  ]
  constructor() { }
  ngOnInit(): void{}
}

