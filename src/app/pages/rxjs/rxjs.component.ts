import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})

// Importamos el OnDestroy
export class RxjsComponent implements OnInit, OnDestroy {


  // Creamos esta subscription para hacer la referencia al observable y utilizarla en el OnDestroy
  subcripiton: Subscription;

  constructor() {

    // Llamamos la función que contiene el observable
    // El pipe nos permite definir una serie de operadores
    this.subcripiton = this.contarObservable()/* .pipe(
      // retry para volver a intentar la acción
      // retry(2)
    )*/
    // El .subscribe() tiene 3 callbacks
    .subscribe(
      // Este es del .next()
      numero => console.log('Subcribed ' , numero),
      // Este es del .error()
      error => console.log('Error', error),
      // Este es del .complete() --> Está vacío porque no se le puede enviar nada
      () => console.log('Observer.complete()')
    );


  }



  ngOnInit() {
  }

  ngOnDestroy() {

    // Con la referencia en del observable en el costructor, llamamos al unsubscribe
    this.subcripiton.unsubscribe();

  }

  // Podemos definir el tipo de dato que el observable va a retornar
  contarObservable(): Observable<any> {

    // Creamos el observable, haciendo el mismo ejemplo de la promesa
    // Este observable no tiene resolve ni rejec, solo tiene un observer que por defecto es subcriber

    // Retornamos el observable de la funcion
    return new Observable <any> ( observer => {

      let contador = 0;

      let intervalo = setInterval( () => {

        contador += 1;

        // Qué pasaría si de un momento a otro los datos lo ponemos así ?
        // Ya donde estoy suscrito no podría acceder a los mismos datos
        const salida = {
          valor: contador
        };


        // Hace lo mismo como si fuera un resolve, y le enviamos la salida
        observer.next(salida);

        if ( contador === 100 ) {

          clearInterval(intervalo);

          // Decimos que la función ya terminó
          observer.complete();
        }

        /*

        PARA EL EJECICIO DEL OPERADOR MAP, VAMOS A COMENTAR ESTO


        if ( contador === 2 ) {

          clearInterval(intervalo);

          // Si existe un error lo enviamos
          observer.error(' - en el observer');
        }

        */

      }, 1000);

    // Podemos definir el map al final del observable para que a la hora acceder a este
    // Observable tener el mismo dato.
    }).pipe(
      map( resp => resp.valor),

      // Con el filter, vamos a filtrar los valores impares
      // El operador filter, recibe el valor y un index
      filter ( (valor, index) => {

        if ( (valor % 2) === 1 ) {
          // Si es impar
          return true;
        } else {
          // Si es par
          return false;
        }

      })
    );

  }

}
