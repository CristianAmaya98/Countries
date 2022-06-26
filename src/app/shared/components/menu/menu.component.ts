import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private _keyName: string = 'themeName';

  themeDefault: string = 'lightTheme';


  @Output() themeMode: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.themeMode.emit(this.getThemeLocalStorage());
  }

  setMode() {
    this.themeDefault = (this.themeDefault == 'lightTheme') ? 'darkTheme' : 'lightTheme';
    localStorage.setItem(this._keyName, this.themeDefault);
    this.themeMode.emit(this.themeDefault);
  }


  getThemeLocalStorage(): string {
    return localStorage.getItem(this._keyName) || 'lightTheme';
  }
}
