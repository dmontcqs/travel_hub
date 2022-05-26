import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { LeftMenuComponent } from './left-menu/left-menu.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormularioComponent } from './formulario/formulario.component';
// importamos la clase para hacer fomularios. 
import { ReactiveFormsModule } from '@angular/forms';
// imprta cosas de angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// importamos nuestra CLASE que contiene con componentes de angular Material. 
//import{ MaterialModule} from './material.module'

import {MatSidenavModule} from '@angular/material/sidenav'
 

@NgModule({
  // esto es los componentes creados localmente. 
  declarations: [
    AppComponent,
    LeftMenuComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    FormularioComponent,
    
    
  
   
     
  ],
  imports: [
    // estos son los componentes creados externamente.
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule
    
  ],
  // aqui van los servicios que puedo inventarme 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

