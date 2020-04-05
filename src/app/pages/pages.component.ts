import { Component, OnInit } from '@angular/core';

// Declaramos la función para usarla
declare function  init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Llamamos la función para inicializar los plugins
    init_plugins();
  }

}
