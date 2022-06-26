import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'verifcarImagen'
})
export class ImagenPipe implements PipeTransform {

  transform(value: string): string {

    if (value == '' && (value as string).trim().length == 0) {
      return 'assets/img/no-imagen.png';
    }

    return value;
  }

}
