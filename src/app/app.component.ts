import { Component } from '@angular/core';

@Component ({
  selector: 'app-root' ,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent{
  nome: string = "Arielle";
  valor: string = "asdfg";

  val1: number = 18;
  val2: number = 2;

  somar(val1, val2) : number{
    
  }

  subtrair(val1, val2) : number{

  }

  multiplicar(val1, val2) : number{

  }

  dividir(val1, val2) : number{

  }

clique() : void {
  alert(this.nome);
  }
}
