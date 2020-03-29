import { NgModule } from '@angular/core';

// Rutas
import { PAGES_ROUTES } from './pages.routes';

// Componentes
import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
    // Declaramos las páginas de la carpeta pages
    declarations: [
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
    ],
    exports: [
        // Para que los otras páginas puedan utilizar los componentes
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
    ],
    imports: [
        // Recibimos los componentes de la carpeta shared
        SharedModule,
        PAGES_ROUTES
    ]
})

// Ponemos el nombre con el cual va a ser reconocido este modulo
export class PagesModule { }
