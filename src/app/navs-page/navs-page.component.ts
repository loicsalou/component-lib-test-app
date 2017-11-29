import {Component, OnInit} from '@angular/core';
import {pageScaleTransition} from '../common/page-transition.animation';
import {Navs} from 'web-components';

@Component({
             selector: 'app-navs-page',
             templateUrl: './navs-page.component.html',
             styleUrls: [ './navs-page.component.scss' ],
             animations: [ pageScaleTransition ]
           })
export class NavsPageComponent implements OnInit {
// transition state
  state;

  navs: string;

  constructor() {
  }

  ngOnInit() {
  }

  navsChanged(navs: Navs) {
    console.info('Navs changed ! ' + JSON.stringify(navs));
  }
}
