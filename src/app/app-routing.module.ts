import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EjecuciontComponent } from './components/ejecuciont/ejecuciont.component';
import { EjecuciondComponent } from './components/ejecuciond/ejecuciond.component';
import { RegistrosComponent } from './components/registros/registros.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: '**', redirectTo: 'Home', pathMatch: 'full' },     
     { path: 'Home', component: HomeComponent },
     { path: 'EjecucionDiaria', component: EjecuciondComponent },
     { path: 'EjecucionTotal', component: EjecuciontComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
