import { Injectable } from '@angular/core';

@Injectable()
export class CourseInfoService {

  constructor() { }

  getCourses(): Array<string> {
    return ['course1', 'course2', 'course3'];
  }
}
