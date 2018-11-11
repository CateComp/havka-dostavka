import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class MenuPipe implements PipeTransform {
transform(items: any, filter: any, filterItems: Array<any>, isAnd: boolean): any {
  console.log('Filtering ..');
  if (filter && Array.isArray(items) && filterItems) {
    const filterKeys = Object.keys(filter);
    const checkedItems = filterItems.filter(item =>  item.checked);
    if (!checkedItems || checkedItems.length === 0) { return items; }
    if (isAnd) {
      return items.filter(item =>
          filterKeys.reduce((acc1, keyName) =>
              (acc1 && checkedItems.reduce(
                (acc2, checkedItem) => acc2 && new RegExp(item[keyName], 'gi').test(checkedItem.value) || checkedItem.value === '', true))
            , true)
            );
    } else {
      return items.filter(item => {
        return filterKeys.some((keyName) => {
          return checkedItems.some((checkedItem) => {
            return new RegExp(item[keyName], 'gi').test(checkedItem.value) || checkedItem.value === '';
          });
        });
      });
    }
  } else {
    return items;
  }
}
}
