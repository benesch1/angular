import { Component } from '@angular/core';
import { SvgItemService } from '../services/svg-item.service';
import { svgItems } from '../svgItem';
import * as d3 from 'd3';



declare const window: any;

@Component({
  selector: 'app-svg-item-list',
  templateUrl: './svg-item-list.component.html',
  styleUrls: ['./svg-item-list.component.css']
})
export class SVGItemListComponent {
  svgItems = this.svgItemService.getItems();

  constructor(
    private svgItemService: SvgItemService
  ) {
    this.onUpdateValues = this.onUpdateValues.bind(this);
  }

  showSVGElement(event:any) {
    console.log(event.source.id,  'has changed!');
  }

  onUpdateValues() {
    try {
      const hostinger = window.host;
      console.log(hostinger)

      const test = hostinger.dataValues
      hostinger.dataKeys = [1,this.svgItems.length]
      let d3test = d3.selectAll(".node");
      d3test.style("fill",function(d, i){
        const temperature = test[0][i]
        const red = Math.round(temperature * 255)
        return "rgb(" + red + ",0,100)"
      })
    }
    catch(e:any) {
      console.log(e.Message)
    }
  }


  onClick() {
    const hostinger = window.host;
    hostinger.valuesUpdated.connect(this.onUpdateValues)
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/