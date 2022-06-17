import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwlCarouselComponent } from './owl-carousel/owl-carousel.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HomeComponent } from './home/home.component';
import { CardsAgendarComponent } from './cards-agendar/cards-agendar.component';
import { FundadoraComponent } from './fundadora/fundadora.component';
import { EquipeComponent } from './equipe/equipe.component';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    OwlCarouselComponent,
    MenuComponent,
    RodapeComponent,
    HomeComponent,
    CardsAgendarComponent,
    FundadoraComponent,
    EquipeComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
