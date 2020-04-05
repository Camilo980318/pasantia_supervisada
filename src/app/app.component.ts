import { Component } from '@angular/core';
import { SettingsService } from './services/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Inyectamos el servicio de los ajustes para que apenas inicie el app, se cargue el
  // cargarAjustes()
  constructor( public AjustesServices: SettingsService ) {

  }

}
