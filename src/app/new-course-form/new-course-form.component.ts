import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {

  form = new FormGroup({
    topics: new FormArray([])
  })

  constructor() { }

  ngOnInit() {
  }

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
  }

  deleteTopic(topic: FormControl) {
    let i = this.topics.controls.indexOf(topic);
    console.log(i,topic)
    this.topics.removeAt(i);
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }

}
