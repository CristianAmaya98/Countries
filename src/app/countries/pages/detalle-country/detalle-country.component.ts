import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country, Name, Aed, Currencies } from '../../interfaces/country.interface';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-detalle-country',
  templateUrl: './detalle-country.component.html',
  styleUrls: ['./detalle-country.component.css']
})
export class DetalleCountryComponent implements AfterViewInit {

  country !: Country;

  private _nativeName !: Name;

  private _currencies: string = '';

  private _languages: string = '';


  public get nativeName(): Name {
    return this._nativeName;
  }


  public get currencies(): string {
    return this._currencies;
  }



  public get languages(): string {
    return this._languages;
  }



  public set nativeName(argumentoName: Name) {
    const data = Object.keys(argumentoName.nativeName!);
    this._nativeName = argumentoName.nativeName![data[data.length - 1]];
  }



  public set currenciesCountry(country: Country) {
    const [key, value] = Object.entries(country.currencies!)[0];
    this._currencies = value.name;
  }



  public set languagesCountry(country: Country) {
    const languages = Object.entries(country.languages!).map(([key, value]) => value);
    this._languages = languages.join(', ');
  }



  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService
  ) { }




  ngAfterViewInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => {
          return this.countriesService.getContryCode(id);
        })
      )
      .subscribe(country => {
        this.country = country;
        this.currenciesCountry = this.country;
        this.languagesCountry = this.country
        this.nativeName = this.country?.name;
      });
  }

}
