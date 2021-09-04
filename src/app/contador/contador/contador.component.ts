import { Component } from '@angular/core';
/* Dentro de carpeta app en el .component.ts se estructura la parte logica del componente, declarando un decorador y
seguido de la clase a la cual va a aplicar; en la carpeta app tambien esta el app.component.html aqui es donde se coloca
la nueva etiqueta (en este ejemplo app-contador) se coloca; finalmente en el app.module.ts, que esta dentro de la carpeta app, se suscriben ya sea componentes, modulos etc.
Ahi se debe declarar el nuevo componente creado, en la seccion declarations. Ejemplo:

declarations: [
    AppComponent,
    ContadorComponent <-
  ]

*/
@Component({

    selector: 'app-contador',
    template: `<h1>{{titulo}}</h1>

                <i>La base es {{base}}</i>
                
                <button (click) = "acumular(base)">+{{base}}</button>
                
                <span>{{numero}}</span>

                <button (click) = "acumular(-base)">-{{base}}</button>`

})


export class ContadorComponent {
    titulo: string = 'Contador app';
    numero: number = 10;

    base:number = 5;

    acumular(valor:number){
        this.numero+=valor;
    }
}


