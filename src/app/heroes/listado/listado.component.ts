import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'IronMan', 'Hulk', 'Thor', 'Capitan America']
  heroeB: string = '';

  borrarHeroe() {

    this.heroeB = this.heroes.shift() || '';
 
    console.log(this.heroeB);

  }

}


