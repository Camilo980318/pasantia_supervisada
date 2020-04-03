import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  // Declaramos una variable progreso que sera el valor inicial de la barra
  progresoAzul = 30;
  progresoAmarillo = 40;

  constructor() { }

  ngOnInit() {
  }

  /*
  Si utilizaramos la función, sería así. Pero en este caso, vamos a utilizar la asignación 
  directa.


  actualizaValor( evnt:number ) {
      this.progresoAzul = event;
  }


  */

}
