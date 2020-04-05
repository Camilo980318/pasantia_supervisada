import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importamos las rutas
import { APP_ROUTES } from './app.routes';

// Imprtamos los modulos
import { PagesModule } from './pages/pages.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// Servicios
import { ServiceModule } from './services/service.module';


// Temporal
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
