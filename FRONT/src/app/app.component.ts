import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public rota: Number = 1;

  constructor() {
    
  }

  pagina(numeroPagina: Number){
    this.rota = numeroPagina;
  }

}
