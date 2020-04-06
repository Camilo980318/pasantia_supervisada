import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {


    // Para ejecutar una función o acción, cuando la promesa se resuelva

    // Cuando en el resolve o reject, envía un parametro, podemos recibirlo con una variable

    // llamamos la función que contiene la promesa
    this.contarPromesa().then( (mensaje) => {
      return console.log('Promesa resuelta', mensaje);
    } )

    // Imprimimos un error cuando no se cumple la promesa
    .catch( error => console.error('Error en la promesa', error ));

  }

  ngOnInit() {
  }


  contarPromesa() {

    // Creamos una promesa que recibe el resolve --> funcion que se llama cuando todo sale bien)
    // Y el reject --> Cuando todo sale mal y queremos enviar una notificación

    // El ejemplo será que en una x cantidad de tiempo, va a disparar una tarea

    // Retornamos toda la promesa
    return new Promise( (resolve, reject) => {

      // Creamos un contador que va a aumentar en 1
      let contador = 0;

      // Creamos un intervalo que va durar un intervalo y se va a repetir hasta que el contador=3
      let intervalo = setInterval( () => {
        contador += 1;
        console.log(contador);

        if (contador === 3) {

          // Llamamos al resolve y le pasamos un parámetro
          resolve('enviado del resolve');
          clearInterval(intervalo);
        }

      }, 1000);

    });

  }
}
