import { NgModule } from '@angular/core';

import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule ({
    declarations: [
        // Declaramos lcs componentes de la carpeta shared
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        MaincontentComponent,
        PagenotfoundComponent,
    ],
    exports: [
        // Para que los otras páginas puedan utilizar los componentes
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        MaincontentComponent,
        PagenotfoundComponent,
    ]
})
// Ponemos el nombre con el cual va a ser reconocido este modulo
// Lo vamos a poner en el pagesModule
export class SharedModule { }
