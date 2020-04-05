import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  // Creamos una variable tema, que va a acceder a la etiqueta <link> donde se define el tema
  // Esto se hace con vanilla Js porque en el video se hace con otro método más complicado
  tema = document.getElementById('tema');

  // Definimos los ajustes con la estructura de la interfaz "Ajustes"
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/red-dark.css',
    tema: 'red-dark'
  };

  // Llamamos la función para que apenas inicie el app, se cargue los ajustes
  constructor() { this.cargarAjustes(); }

  // Función para guardar los ajustes en el localStorage
  guardarAjustes() {

    // Como el localStoras solo guarda datos de tipo string, utilizamos la JSON.stringfy
    // Y lo va a guardar con la clave 'ajustes'
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }


  // Función para leer los ajustes guardados del localStorage
  cargarAjustes() {

    // Confirmamos si existen los ajustes guardados
    if ( localStorage.getItem('ajustes') ) {

      // Si existen, que los regrese, y con el parse, los ponemos en la estructura de la interfaz
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));

      // Le pasamos el tema de los ajustes guardados
      this.aplicarTema( this.ajustes.tema );

    } else {

      // Le pasamos el tema de los ajustes por defecto
      this.aplicarTema( this.ajustes.tema );
    }
  }


  aplicarTema( tema: string ) {

    // Definimos la url en donde le vamos a cambiar la palabra que escoge el tema, para eso
    // Obligatoriamente tenemos que ponerla entre `` para pasarle el tema que recibe
    let url = `assets/css/colors/${tema}.css`;

    // Simplemente le pasamos la url con setAttribute
    this.tema.setAttribute('href', url);

    // Le pasamos los datos a los ajustes que definimos en el inicio
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guardarAjustes();
  }

}


// Creamos una interface para definir un tema por defecto
interface Ajustes {
  temaUrl: string;
  tema: string;
}
