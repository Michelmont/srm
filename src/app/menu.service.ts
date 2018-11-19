import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Menu} from '../app/classes/menu';
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  public getMenu(): Observable<Menu[]>
  {
    let menu = this.http.get<Menu[]>('http://michelmmonteiro-com-br.umbler.net/menu')
    return menu; 
  }
}
