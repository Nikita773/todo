import {Pipe, PipeTransform} from '@angular/core';

export type SortOrder = 'asc' | 'desc';

@Pipe({
  name: 'todosSort',
})
export class TodosSortPipe implements PipeTransform {
  transform(value: any[], sortOrder: SortOrder = 'asc', sortKey?: string): any[] {

    if (!value || (sortOrder !== 'asc' && sortOrder !== 'desc')) return value;
    const {compare} = new Intl.Collator();
    return value.sort((a,b) => {
      let c = sortOrder === 'desc' ? a : b;
      let d = sortOrder === 'desc' ? b : a;
      if(sortKey && typeof c === "object") {
        return compare(c[sortKey], d[sortKey]);
      }
      return compare(c,d);
    })
  }
}
