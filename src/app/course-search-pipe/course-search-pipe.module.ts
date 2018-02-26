import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './course-search-filter.pipe'

@NgModule({
  imports: [CommonModule],
  declarations: [FilterPipe],
  exports: [FilterPipe]
})
export class CourseSearchPipeModule {
	static forRoot() {
		return {
			ngModule: CourseSearchPipeModule,
			providers: [],
		}
	}
}
