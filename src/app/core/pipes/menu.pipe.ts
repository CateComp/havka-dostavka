import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class MenuPipe implements PipeTransform {
transform(items: any, filter: any, filterItems: Array<any>, isAnd: boolean): any {
  console.log('Filtering ..');
  console.log('filter', filter);
 return items.filter(item => {
   return filter === 0 || !filter ? items : filter.indexOf(item.type) !== -1 ;
 })
}
}
