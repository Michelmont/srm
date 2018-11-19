import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Acoes} from '../app/classes/Acoes';
@Injectable({
  providedIn: 'root'
})
export class AcoesService {

 

  constructor(private http: HttpClient) { }

  public getAcoes(): Observable<Acoes[]>
  {
    let acoes = this.http.get<Acoes[]>('http://michelmmonteiro-com-br.umbler.net/acoes')
    return acoes; 
  }
}
