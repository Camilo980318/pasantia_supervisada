import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

// Declaramos una constante que será un arreglo de las rutas de pages.
const pagesRoutes: Routes = [
    {
        // Generamos una ruta vacía que va a contener todas las rutas secundarias, que tendrán
        // los componentes de la aplicación.
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graficas1', component: Graficas1Component },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
     }
];

// Creamos la variable de exportacion
// Utilizamos el forChild, porque estas son las rutas secundarias, en el archivo app.routes.ts
// Se declararn las rutas principales con forRoot
export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
