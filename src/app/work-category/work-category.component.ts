import { Component, OnInit } from '@angular/core';
import {Projects} from "../Models/projects";

@Component({
  selector: 'app-work-category',
  templateUrl: './work-category.component.html',
  styleUrls: ['./work-category.component.css']
})
export class WorkCategoryComponent implements OnInit {

 project : Projects[];

  constructor() {
    this.project = [];

  }

  ngOnInit(): void {
  }

}
