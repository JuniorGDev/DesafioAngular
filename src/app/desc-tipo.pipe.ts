import { Pipe, PipeTransform } from '@angular/core';
import { SenadoresService } from './senadores.service';

@Pipe({
  name: 'descTipo'
})
export class DescTipoPipe implements PipeTransform {

  constructor(private senadoresService: SenadoresService){}

  transform(value: number): unknown {
    return this.senadoresService.formatTipo(value);
  }

}
