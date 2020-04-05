import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-acount-settings',
  templateUrl: './acount-settings.component.html',
  styles: []
})
export class AcountSettingsComponent implements OnInit {

  // Inyectamos el servicio de los ajustes
  constructor( public ajustesService: SettingsService ) { }

  ngOnInit() {

    this.colocarCheck();

  }

  // Recibimos el tema y el link seleccionado
  cambiarColor( tema: string, link: any ) {

    // Le enviamos el tema a la función del servicio
    this.ajustesService.aplicarTema(tema);

    // Le pasamos el link seleccionado a la función "cambiarCheck"
    this.cambiarCheck(link);
  }


  cambiarCheck( link: any ) {

    // Creamos un arreglo con todos los elementos de tipo selector
    const selectores: any = document.getElementsByClassName('selector');

    // Recorremos todos los elemtos del arreglo y le quitamos el 'working'
    for ( const ref of selectores) {
      ref.classList.remove('working');
    }

    // Y al elemento que esté seleccionado (link), le agregamos 'working'
    link.classList.add('working');
  }


  colocarCheck() {

    // Creamos un arreglo con todos los elementos de tipo selector
    const selectores: any = document.getElementsByClassName('selector');

    let tema = this.ajustesService.ajustes.tema;

    // Recorremos todos los elemtos del arreglo y confirmamos que el atributo data-theme sea
    // igual al tema

    for ( const ref of selectores) {
      if ( ref.getAttribute('data-theme') === tema ) {
        ref.classList.add('working');
        break;
      }
    }


  }
}
