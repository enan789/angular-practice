import { Component, Input, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  clicked: boolean;
  text: string;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.text = this.el.nativeElement.que;
    this.clicked = false;
    console.log(this.text);
  }

  onClick() {
    this.clicked = !this.clicked;
  }

}
