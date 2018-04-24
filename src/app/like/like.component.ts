import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input() likesCount : number;
  @Input() isActive : boolean;

  currentCount:  number;

  constructor() { }

  ngOnInit() {
    this.currentCount = this.likesCount;
  }

  toggleLike(): void {
    this.isActive = !this.isActive;
    if (this.isActive) {
      this.currentCount++;
    }
    else {
      this.currentCount = this.likesCount;
    }
  }

}
