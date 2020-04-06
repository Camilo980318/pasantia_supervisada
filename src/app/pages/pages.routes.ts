import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AcountSettingsComponent } from './acount-settings/acount-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

// Declaramos una constante que será un arreglo de las rutas de pages.
const pagesRoutes: Routes = [
    {
        // Generamos una ruta vacía que va a contener todas las rutas secundarias, que tendrán
        // los componentes de la aplicación.
        // El parámetro "data", nos permite enviar información a con las rutas, para después accder
        // A ella.
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress Bar' } },
            { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas' } },
            { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
            { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },

            { path: 'settings', component: AcountSettingsComponent, data: { titulo: 'Configuraciones' } },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
     }
];

// Creamos la variable de exportacion
// Utilizamos el forChild, porque estas son las rutas secundarias, en el archivo app.routes.ts
// Se declararn las rutas principales con forRoot
export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
