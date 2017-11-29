import {Component, OnInit} from '@angular/core';
import {pageScaleTransition} from '../../common/page-transition.animation';
import {Router} from '@angular/router';
import {Column, LocalPreferencesManagerService, TableModelHandler} from 'web-components-ng-packagr';

@Component({
             selector: 'app-feature-page',
             templateUrl: './feature-page.component.html',
             styleUrls: [ './feature-page.component.scss' ],
             animations: [ pageScaleTransition ]
           })
export class FeaturePageComponent implements OnInit {
// transition state
  state;

  data: Bottle[];

  // TABLE
  bottlesModel: TableModelHandler<Bottle>;

  constructor(private prf: LocalPreferencesManagerService) {
    const link1: Link = new Link('http://bordeaux.com', 'vins de Bordeaux');
    const link2: Link = new Link('http://bourgogne.com', 'vins de Bourgogne');
    const link3: Link = new Link('http://champagne.com', 'vins de Champagne');
    this.data = [
      {
        aoc: 'bordeaux', color: 'rouge', vintage: 2000, ready: true, link: link1, date: '2017-11-11', toto: 'toto' +
      ' cellule'
      },
      {
        aoc: 'bourgogne', color: 'blanc', vintage: 2011, ready: false, link: link2, date: '2017-11-12', toto: 'toto' +
      ' cellule2'
      },
      {
        aoc: 'bordeaux', color: 'rouge', vintage: 2001, ready: true, link: link1, date: '2017-11-11', toto: 'toto' +
      ' cellule'
      },
      {
        aoc: 'bourgogne', color: 'blanc', vintage: 2012, ready: false, link: link2, date: '2017-11-12', toto: 'toto' +
      ' cellule2'
      },
      {
        aoc: 'bordeaux', color: 'rouge', vintage: 2002, ready: true, link: link1, date: '2017-11-11', toto: 'toto' +
      ' cellule'
      },
      {
        aoc: 'bourgogne', color: 'blanc', vintage: 2013, ready: false, link: link2, date: '2017-11-12', toto: 'toto' +
      ' cellule2'
      },
      {
        aoc: 'Champagne', color: 'bulles', vintage: 2007, ready: true, link: link3, date: '2017-11-13', toto: 'toto' +
      ' cellule3'
      }
    ];
  }

  ngOnInit() {
    this.initTable();
  }

  initTable() {
    const cols: Column[] = [
      {field: 'aoc', label: 'Appellation'},
      {field: 'vintage', label: 'Millésime'},
      {field: 'color', label: 'Couleur'},
      {field: 'ready', label: 'Prête'},
      {field: 'link', label: 'Lien'},
      {field: 'date', label: 'Date'},
      {field: 'toto', label: 'Toto'}
    ];
    this.bottlesModel = new TableModelHandler('ma-table', cols, this.prf);
    this.bottlesModel.setData(this.data);
  }

}

export class Link {
  url: string;
  label: string;

  constructor(url: string, label: string) {
    this.url = url;
    this.label = label;
  }
}

export interface Bottle {
  aoc: string;
  color: string;
  vintage: number;
  ready: boolean;
  link: Link;
  date: string;
  toto: string;
}
