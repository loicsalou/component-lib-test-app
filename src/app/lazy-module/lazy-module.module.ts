import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeaturePageComponent} from './feature-page/feature-page.component';
import {RouterModule} from '@angular/router';
import {DataTableModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'web-components-ng-packagr';

@NgModule({
            imports: [
              CommonModule,
              TableModule,
              DataTableModule,
              RouterModule.forChild([
                                      {
                                        path: '',
                                        component: FeaturePageComponent
                                      }
                                    ])
            ],
            declarations: [ FeaturePageComponent ]
          })
export class LazyModule {
}
