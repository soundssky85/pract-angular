import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';





@NgModule({

    declarations: [ /* Todo lo que esta en las declaraciones se encuentra envisible para toda la aplicacion*/
        HeroeComponent,
        ListadoComponent
    ],
    exports:[ /* Que quiero hacer visibles fuera es este modulo, o sea que sea publico */
        ListadoComponent
    ],
    imports:[ /* Para importar modulos */
        CommonModule
    ]
})
export class HeroesModule{



}