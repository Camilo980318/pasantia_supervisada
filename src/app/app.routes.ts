import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';



// Declaramos una constante que será un arreglo de varias rutas.
const appRoutes: Routes = [
    // Declaramos las rutas principales, el patron es { path: 'ruta', component: componente }
    { path: 'login', component: LoginComponent },
    { path: '**', component: PagenotfoundComponent }
    // Esta última nos indica que si se accede a cualquier otra ruta que no exista en la app,
    // que lo redireccione a la página de not found
];


// Creamos la variable de exportacion
// Utilizamos el forRoot, porque estas son las rutas principales, cuando sean rutas específicas
// utlizaremos el forChild
export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
