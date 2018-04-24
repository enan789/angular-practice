import { Injectable } from '@angular/core';

@Injectable()
export class CourseInfoService {

  constructor() { }

  getCourses(): Array<string> {
    return ['Zippy', 'New Course', 'Contact Form'];
  }
}
