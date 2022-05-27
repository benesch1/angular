import { Component } from '@angular/core';
import { SvgItemService } from '../services/svg-item.service';
import { svgItems } from '../svgItem';

@Component({
  selector: 'app-svg-item-list',
  templateUrl: './svg-item-list.component.html',
  styleUrls: ['./svg-item-list.component.css']
})
export class SVGItemListComponent {
  svgItems = this.svgItemService.getItems();

  constructor(
    private svgItemService: SvgItemService
  ) {}

  showSVGElement(event:any) {
    console.log(event.source.id,  'has changed!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/