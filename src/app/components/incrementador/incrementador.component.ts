import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

    // Declaramos una variable progreso que sera el valor inicial de la barra y el tituloç
    // Podemos recibir estas variables con @input()
    // Le ponemos un alias a leyenda
    @Input() progreso = 75;
    @Input('titulo') leyenda = 'Título';

    // Para enviarle datos al padre es con @Output y va a ser un emmiter, el cual va en enviar
    // el valor de progreso
    // El event Emitter va a ser del angular core a la hora de importarlo
    // Vamos a emitir un valor numerico
    @Output() cambioValor: EventEmitter< number > = new EventEmitter();

    // Utilizamos el @ViewChild para referenciar un elemento html
    // y la forma de pasarlo al elemento es con #nombreViechild
    @ViewChild('txtProgreso', {static: false})txtProgreso: ElementRef;

  constructor() { }

  ngOnInit() {

  }


    // Evento que captura el cambio del input (ngModelChange)
    // El newValue será de tipo number porque la función está asociada a un input de tipo number
    onChange( newValue: number ) {

      // Utilizamos vanilla js (o Js puro) para bloquear el input a que reciba unicamente
      // valores entre 0-100
      // Este nos retornará un arreglo con todos los inputs con nombre "progreso", por eso
      // seleccionamos el input en la posición 0

      // Pero haciendo lo del @viewchild, no vamos a usar esto, ya que este nos entrega
      // un obejto con mucha información
      // let elemtHtml: any = document.getElementsByName('progreso')[0];


      if ( newValue >= 100 ) {
        this.progreso = 100;
      } else if ( newValue <= 0 ) {
        this.progreso = 0;
      } else {
        this.progreso = newValue;
      }

      // Le decimos al input que tome el valor del progreso, por eso no dejará escribir
      // numeros mayores a 100 o del estilo 0135
      // elemtHtml.value = this.progreso;

      // Utilizamos el viewchild, con esto no necesitamo el vanilla JS
      this.txtProgreso.nativeElement.value = this.progreso;


      // Utilizando el emitter, enviamos el valor del progreso al padre
      this.cambioValor.emit( this.progreso );
    }

    // Creamos el evento cambiarValor
    cambiarValor( valor ) {
      if ( this.progreso >= 100 && valor > 0 ) {
          this.progreso = 100;
          return;
      }
      if (this.progreso <= 0 && valor < 0) {
          this.progreso = 0;
          return;
      }

      this.progreso = this.progreso + valor;

      // Utilizando el emitter, enviamos el valor del progreso al padre
      this.cambioValor.emit( this.progreso );

      // Utilizamos el viewchild para ponerle el focus al input
      this.txtProgreso.nativeElement.focus();
    }

}
