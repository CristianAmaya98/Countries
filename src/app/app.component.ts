import { Component } from '@angular/core';
import { BaseComponent } from './countries/helpers/base.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent extends BaseComponent {
  title = 'Countries';

  setMode(theme: string) {
    this.toogleModoOscuro(theme)
  }

}
