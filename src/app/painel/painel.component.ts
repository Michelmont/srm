import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  acoes = [{
    value: '001',
    text: 'Ação 1'
  },
  {
    value: '002',
    text: 'Ação 2'
  },
  {
    value: '002',
    text: 'Ação 3'
  }
]
  constructor() { }

  ngOnInit() {
  }

}
