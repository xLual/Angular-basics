import { Component } from "@angular/core"; 

@Component({
    selector: "app-contador",
    template: `
        
        <h1>{{titulo}}</h1>
        <h3>La base es: <strong>{{base}}</strong></h3>

        <button (click)="aumentar(numero)">{{base}}</button>
        <span> {{numero}} </span>
        <button (click)="disminuir(numero)">{{base}}</button>
        
    
    `
})
export class ContadorComponent{

    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5
  
    aumentar(valor: number){
    this.numero = valor + this.base;
    }
    disminuir(valor: number){
      this.numero = valor - this.base;
}
}