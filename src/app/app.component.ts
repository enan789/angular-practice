import { Component } from '@angular/core';
import { CoursesComponent } from './courses/courses.component';
import { NgModel } from '@angular/forms';
import { LikeComponent } from './like/like.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular of the something or other';
  isFavorite = true;

  formCategories = [
    {name:'Development', id:1},
    {name:'Art', id:2},
    {name:'Languages', id:3}
  ]

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
  }
}
