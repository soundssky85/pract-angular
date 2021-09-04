import {NgModule} from '@angular/core';
import { ContadorComponent } from './contador/contador.component';

/* Ojo cuando se crea un nuevo modulo y se importa en el app.module.ts, hay que recragar de nuevo el servidor */

@NgModule({
    declarations: [ /* Todo lo que esta en las declaraciones se encuentra envisible para toda la aplicacion*/
        ContadorComponent
    ],
    exports:[ /* Que quiero hacer visibles fuera es este modulo, o sea que sea publico */
        ContadorComponent
    ]
})

export class ContadorModule{


}