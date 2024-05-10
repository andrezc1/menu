import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventoComponent } from './evento/evento.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { PublicacionComponent } from './publicacion/publicacion.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'noticia' },
  {path:'noticia', component: NoticiaComponent,},
  {path:'evento', component: EventoComponent,},
  {path:'publicacion', component: PublicacionComponent,}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
