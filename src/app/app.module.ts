import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { MatIconModule } from "@angular/material/icon";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SVGItemListComponent } from './svg-item-list/svg-item-list.component';
import { SvgLoaderComponent } from './svg-loader/svg-loader.component';
import { HttpClientModule } from '@angular/common/http';

import { SvgItemService } from './services/svg-item.service';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { CustomTabComponent } from './components/custom-tab/custom-tab.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    MatGridListModule,
    MatCheckboxModule,
    MatTabsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { 
        path: '', component: SVGItemListComponent 
      },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    SvgLoaderComponent,
    SVGItemListComponent,
    FooterBarComponent,
    CustomButtonComponent,
    CustomTabComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/