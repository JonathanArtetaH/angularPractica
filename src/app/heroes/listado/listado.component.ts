import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html', 
})
export class ListadoComponent  {
 heroes: string[] = ['Hulk','Spiderman','Irom-man','Cap America','Pantera  Negra'];
 muertosheroes:string='';

 borrarHeroe(){ 
   this.muertosheroes = this.heroes.shift() ||'';
   
 }
 
}
