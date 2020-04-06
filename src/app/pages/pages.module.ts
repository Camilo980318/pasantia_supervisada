import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Rutas
import { PAGES_ROUTES } from './pages.routes';

// Componentes
import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../shared/shared.module';
import { AcountSettingsComponent } from './acount-settings/acount-settings.component';
import { PromesasComponent } from './promesas/promesas.component';

// Temporalmente importamos los forms Module aquí (Después, lo cambiamos de lugar)
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';


// ng2-charts
import { ChartsModule } from 'ng2-charts';
import { RxjsComponent } from './rxjs/rxjs.component';




@NgModule({
    // Declaramos las páginas de la carpeta pages
    declarations: [
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        IncrementadorComponent,
        GraficoDonaComponent,
        AcountSettingsComponent,
        PromesasComponent,
        RxjsComponent
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
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})

// Ponemos el nombre con el cual va a ser reconocido este modulo
export class PagesModule { }
