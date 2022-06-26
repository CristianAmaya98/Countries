import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {


  private _regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];

  private _contries !: Country[];
  private url: string = environment.urlServicio;


  public get countries(): Country[] {
    return (this._contries?.length > 0) ? [...this._contries] : [];
  }

  public get regiones(): string[] {
    return [...this._regiones];
  }


  constructor(
    private _http: HttpClient
  ) { }

  private _getConfigParams(): HttpParams {
    return new HttpParams()
      .set('fields', 'name,cca3,region,population,capital,flags');
  }

  getAllCountries() {
    const params = this._getConfigParams();
    this._http.get<Country[]>(`${this.url}/all`, { params })
      .subscribe(dataCountries => {
        this._contries = dataCountries;
      });
  }

  getCountriesRegion(region: string) {
    if (region == 'todo') {
      this.getAllCountries();
      return;
    }
    const params = this._getConfigParams();
    this._http.get<Country[]>(`${this.url}/region/${region}`, { params })
      .subscribe(dataRegionCountries => this._contries = dataRegionCountries);
  }
}
