import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { EventoComponent } from './evento/evento.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PublicacionComponent,
    NoticiaComponent,
    EventoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
