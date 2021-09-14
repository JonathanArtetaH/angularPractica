 
import { Component } from "@angular/core";


@Component({
    selector: 'app-heroes',
    templateUrl:'heroe.html'
})

export class HeroresComponent{
    nombre: string = 'Ironman';
    desc: string = 'Es una armadura'
    edad: number = 34

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`
    }

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    cambiarNombre():void{
        this.nombre = 'Spiderman';
    }
    cambiarEdad():void{
        this.edad = 19;
    }
}