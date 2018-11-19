import { Component, OnInit } from '@angular/core';
import { Acoes } from '../classes/Acoes';
import {AcoesService} from '../Acoes.service'
@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  public listaAcoes: Acoes[];


  constructor(private acoes:AcoesService) { }

  private carregaAcoes()
  {
    this.acoes.getAcoes().subscribe(
      acoes => this.listaAcoes = acoes,
      error => console.log('Erro'),
      () => console.log('Ações carregadas com sucesso')
    )
  }

  ngOnInit() {
    this.carregaAcoes()
  }

}
