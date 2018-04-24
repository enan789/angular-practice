import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  formCategories = [
    {name:'Development', id:1},
    {name:'Art', id:2},
    {name:'Languages', id:3}
  ];

  constructor() { }

  ngOnInit() {
  }

}
