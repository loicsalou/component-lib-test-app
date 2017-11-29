import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {DataTableModule} from 'primeng/primeng';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import { NavsPageComponent } from './navs-page/navs-page.component';
import {FormsModule} from '@angular/forms';
import { TablePageComponent } from './table-page/table-page.component';
import { SwiperPageComponent } from './swiper-page/swiper-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AnimationModule, MyExpandoComponent} from './animation/animation.module';
import {
  LocalPreferencesManagerService, NavsModule, PreferencesManagerModule, SwiperModule, TableModule,
  ZasCommonModule
} from 'web-components-ng-packagr';

@NgModule({
            imports: [
              BrowserModule,
              BrowserAnimationsModule,
              FormsModule,
              SwiperModule,
              TableModule,
              AnimationModule,
              NavsModule,
              ZasCommonModule,
              DataTableModule,
              PreferencesManagerModule.forRoot(),
              RouterModule.forRoot([
                                     {
                                       path: 'anim',
                                       component: MyExpandoComponent
                                     },
                                     {
                                       path: 'swiper',
                                       component: SwiperPageComponent
                                     },
                                     {
                                       path: 'table',
                                       component: TablePageComponent
                                     },
                                     {
                                       path: 'navs',
                                       component: NavsPageComponent
                                     },
                                     {
                                       path: 'lazy',
                                       loadChildren: 'app/lazy-module/lazy-module.module#LazyModule',
                                       pathMatch: 'full'
                                     },
                                   ])
            ],
            declarations: [
              AppComponent,
              NavsPageComponent,
              TablePageComponent,
              SwiperPageComponent
            ],
            providers: [
              LocalPreferencesManagerService
            ],
            bootstrap: [ AppComponent ],
            schemas: [
              NO_ERRORS_SCHEMA
            ]
          })
export class AppModule {
}
