import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Declaramos la función para usarla
declare function  init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Importamos el router
  constructor(public router: Router) { }

  ngOnInit() {
    // Llamamos la función para inicializar los plugins
    init_plugins();
  }

  login() {
    // Direccionamos usando el router
    this.router.navigate([ '/dashboard'] );
  }

}
