import { PipeTransform, Pipe } from '@angular/core';
import { Dish } from 'app/core/interfaces/dish';

@Pipe({
  name: 'menuFilter'
})
export class MenuPipe implements PipeTransform {
  transform(items: Dish[], filter: any): Dish[] {
    console.log('Filtering ..');
    
    return items.filter((item: Dish) => {
      return filter === 0 || !filter ? items : filter.indexOf(item.type) !== -1 ;
    })
  }
}
