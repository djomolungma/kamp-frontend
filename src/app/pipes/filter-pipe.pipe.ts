import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Product[], filterText: string): Product[] {
    filterText = filterText?filterText.toLocaleLowerCase():"";
    return filterText ? value.filter((p:Product)=>p.productName.toLocaleLowerCase().indexOf(filterText)!==-1) : value;//küçük harfe çevirip filtreleme yapar, filtrede geçenlerin dizisini döndür
  }

}

// filterText?  --> turnary operatoru
//javascriptte araylerin çeşitli fonksiyonları var --> map, filter  vs.
