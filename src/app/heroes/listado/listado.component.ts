import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

    heroes:string[] = ["Dr. Strange","Thor","Sipderman","Capitan America"];
    heroeBorradof:string = "";
    borrarHeroe(){
      //this.heroes.splice(3);
      /* const heroeBorrado = this.heroes.shift();
      console.log(heroeBorrado); */
      const heroeBorrado = this.heroes.shift();
      
      this.heroeBorradof = heroeBorrado || '';
      
       
    }

}
