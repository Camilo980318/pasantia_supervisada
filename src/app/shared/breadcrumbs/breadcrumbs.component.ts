import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  // Creamos una variable para asignarle la data que obtenemos del observable
  titulo: string;

  // Creamos un router para obtener la data de las rutas
  constructor( private router: Router,
               private title: Title,
               private meta: Meta) {

    // Nos subscribimos al observable y le asignamos el titulo a la variable global
    this.getDataRoutes().subscribe( data => {
      this.titulo = data.titulo;
      this.title.setTitle(this.titulo + ' - Pasantía Supervisada');

      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.titulo
      };

      this.meta.updateTag(metaTag);

    });
  }

  ngOnInit() {
  }

  getDataRoutes() {

    // Como router.events es un observable, nos subscribimos
    return this.router.events.pipe(
      filter( evento => evento instanceof ActivationEnd),
      filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map( (evento: ActivationEnd) => evento.snapshot.data )
    );
  }

}
