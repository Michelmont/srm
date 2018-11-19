import { Component, OnInit } from '@angular/core';
import {MenuService} from '../menu.service'
import { Observable } from 'rxjs';
import { Menu } from '../classes/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public itemsMenu:Menu[] = []
  

  constructor(private  menu: MenuService) { 
  


  }

  private carregaMenu()
  {
     this.menu.getMenu().subscribe(
      menuItems => this.itemsMenu = menuItems,
                 error => console.log("Erro ma aplicação :: " + error),
                 () => console.log("menu carregado com sucesso")
     );
  }
  ngOnInit() {
    this.carregaMenu();
  }

}
