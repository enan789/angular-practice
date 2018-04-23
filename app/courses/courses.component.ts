import { Component, OnInit } from '@angular/core';
import { CourseInfoService } from '../course-info.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses = [];

  constructor(courseInfoService : CourseInfoService) {
    this.courses = courseInfoService.getCourses();
  }

  ngOnInit() {
  }

}
