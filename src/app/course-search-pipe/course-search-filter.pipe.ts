import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
	
	searchText = searchText.toLowerCase();
	
	var course;
	var courseName;
	return items.filter( course => {
		courseName = course.major + " " + course.ident + " " + course.name;
      return courseName.toLowerCase().includes(searchText);
    });

   }
}