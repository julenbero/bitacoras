import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjecuciontComponent } from './components/ejecuciont/ejecuciont.component';
import { EjecuciondComponent } from './components/ejecuciond/ejecuciond.component';
import { RegistrosComponent } from './components/registros/registros.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    EjecuciontComponent,
    EjecuciondComponent,
    RegistrosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
