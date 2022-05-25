import { Component } from '@angular/core';

import { svgItems } from '../svgItem';

@Component({
  selector: 'app-svg-item-list',
  templateUrl: './svg-item-list.component.html',
  styleUrls: ['./svg-item-list.component.css']
})
export class SVGItemListComponent {
  products = svgItems;

  share() {
    console.log('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/