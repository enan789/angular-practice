import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-categories',
  templateUrl: './dynamic-categories.component.html',
  styleUrls: ['./dynamic-categories.component.css']
})
export class DynamicCategoriesComponent implements OnInit {
  isFavorite = true;

  constructor() { }

  ngOnInit() {
  }

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
  }

}
