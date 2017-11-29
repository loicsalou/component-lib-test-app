import { Component, OnInit } from '@angular/core';
import {pageScaleTransition} from '../common/page-transition.animation';

@Component({
  selector: 'app-swiper-page',
  templateUrl: './swiper-page.component.html',
  styleUrls: ['./swiper-page.component.scss'],
             animations: [ pageScaleTransition ]
})
export class SwiperPageComponent implements OnInit {
// transition state
  state;
  page = 0;

  constructor() { }

  ngOnInit() {
  }

  swiped(sense: number) {
    this.page += sense;
    if (this.page < 1) {
      this.page = 4;
    } else if (this.page > 4) {
      this.page = 1;
    }
  }

}
