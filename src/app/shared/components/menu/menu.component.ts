import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BaseComponent } from 'src/app/countries/helpers/base.component';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private _keyName: string = 'themeName';

  private _themes: string[] = environment.themes;

  themeDefault: string = this._themes[0];


  @Output() themeMode: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.themeMode.emit(this.getThemeLocalStorage());
  }

  setMode() {
    this.themeDefault = (this.themeDefault == this._themes[0]) ? this._themes[1] : this._themes[0];
    localStorage.setItem(this._keyName, this.themeDefault);
    this.themeMode.emit(this.themeDefault);
  }


  getThemeLocalStorage(): string {
    const themeInicializado: string = this._themes[0];

    if (localStorage.getItem(this._keyName) == null) {
      localStorage.setItem(this._keyName, themeInicializado);
      this.themeDefault = themeInicializado
    }

    return localStorage.getItem(this._keyName) || themeInicializado;
  }
}
