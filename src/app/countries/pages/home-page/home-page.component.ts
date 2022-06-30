import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BaseComponent } from '../../helpers/base.component';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent extends BaseComponent implements OnInit {

  public get countries(): Country[] {
    return this.countriesService.countries;
  }


  public get regiones(): string[] {
    return this.countriesService.regiones;
  }


  constructor(
    private countriesService: CountriesService
  ) {
    super();
  }


  ngOnInit(): void {
    this.countriesService.getAllCountries();
  }



  obtenerCountries(region: string) {
    this.countriesService.getCountriesRegion(region);
  }


}
