import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  transform(value: number, rate: number): number {//value: number, rate:number,x:number (vatAdded için value: number --> değiştirmek istediğimiz değer,rate:number --> 1. parametre, x:number --> 2. patrametre (value bu örnekte unitPrice e eşit))
    return value + (value * rate / 100);
  }

}

//elimizdeki veriyi çok farklı bir şekilde göstermek için kullanılır
