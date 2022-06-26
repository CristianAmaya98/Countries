import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { DetalleCountryComponent } from './pages/detalle-country/detalle-country.component';
import { CardComponent } from './components/card/card.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { ImagenPipe } from './pipes/imagen.pipe';



@NgModule({
  declarations: [
    HomePageComponent,
    DetalleCountryComponent,
    CardComponent,
    ImagenPipe
  ],
  exports: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule
  ]
})
export class CountriesModule { }
