import {Component} from '@angular/core';

@Component({
    selector:'app-contador',
    template:`
        <div class="espacio">
        <h1>{{title}}</h1>
        <h5>La base es de {{base}}</h5>
        <button (click)="acumular(base)">+{{base}}</button>
        <span>{{numero}}</span>
        <button (click)="acumular(-base)">-{{base}}</button>
        </div>`    
})


export class contadorComponent{
    title :string = 'Contador App';
    numero:number = 0;
    base  :number = 5;
  
    acumular(operacion:number){
        this.numero +=operacion;
    }
}