import { Component, OnInit } from '@angular/core';
import { courses } from '../coursesModule'

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  courses = courses[0].courses;

  constructor() { }

  ngOnInit() {
  }

}
