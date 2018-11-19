import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public itemsMenu = [
    {
      texto: 'Painel de Gestão',
      imagem: '../assets/images/globo2.png',
      arrow: false,
      link: '#1'
    },
    {
      texto: 'Conta Digital',
      imagem: '../assets/images/arroba1.png',
      arrow: false,
      link: '#2'
    },
    {
      texto: 'Painel de Gestão',
      imagem: '../assets/images/grafico1.png',
      arrow: true,
      link: '#3'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
