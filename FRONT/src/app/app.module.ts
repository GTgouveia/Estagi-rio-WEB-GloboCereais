import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarVacaComponent } from './cadastrar-vaca/cadastrar-vaca.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilialComponent } from './componente/filial/filial.component';
import { CowComponent } from './componente/cow/cow/cow.component';
import { CowFilialComponent } from './componente/cow-filial/cow-filial/cow-filial.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarVacaComponent,
    HomeComponent,
    FilialComponent,
    CowComponent,
    CowFilialComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
