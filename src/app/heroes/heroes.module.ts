import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroresComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        HeroresComponent,
        ListadoComponent
    ],
    exports:[
        HeroresComponent,
        ListadoComponent
    ],
    imports:[
        CommonModule
    ],
})
export class HeroesModule{}