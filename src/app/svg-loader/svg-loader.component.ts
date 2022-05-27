import { Component } from '@angular/core';
import { svgItems } from '../svgItem';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as d3 from 'd3';
import { SvgItemService } from '../services/svg-item.service';
import * as svgPanZoom from 'svg-pan-zoom';

@Component({
  selector: 'app-svg-loader',
  templateUrl: './svg-loader.component.html',
  styleUrls: ['./svg-loader.component.css']
})
export class SvgLoaderComponent {
  svgItems = this.svgItemService.getItems();
  fileName = '';
  file:any;
  test:any;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private svgItemService: SvgItemService
    ) {}

  addToItemList(element : any) {
    this.svgItemService.addToItemList(element);
  }

  scanSVG() {
    //const d3test = d3.selectAll(".node")._groups[0];
    let d3test = d3.selectAll(".node");
    if (d3test.hasOwnProperty('_groups')) {
      //console.log(d3test);
      //console.log(d3test.node());
      this.svgItems = [];
      // const d3test2 = Object.entries(d3test)
      for (const element of d3test) {
        console.log(element, typeof element);
        // this.svgItems.push(element);
        this.addToItemList(element);
      }
      //console.log('d3test has property _groups');
    }
    console.log(this.svgItems)
    // const apts = Object.entries(d3test)
    // const weva = apts.map(item => {
    //     item.petName = 'node ' + item[0];
    //     item.ownerName = item[1].parentElement.id;
    //     item.aptNotes = this.state.lastIndex;
    //     item.aptDate = this.state.lastIndex;
    //     item.key = this.state.lastIndex;
    //     this.setState({lastIndex : this.state.lastIndex ++})
    //     return item;
    //   })
    // console.log(weva);
    // this.props.updateAppointments(weva);
  }

  onFileSelected(event: any) {
    //console.log(event.target.files);
    //console.log(event.target.files[0].name);
    this.file = event.target.files[0];
    this.fileName = event.target.files[0].name;
    //console.log(this.fileName);
    //console.log(this.file);
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      ///console.log(fileReader.result);
      //this.test = fileReader.result;
        //console.log('testinger exists')
        let testinger = document.getElementById('testinger');
        if (testinger != null) {
          console.log(typeof fileReader.result)
          if (typeof fileReader.result == 'string') {
            testinger.innerHTML = fileReader.result;
          }

          const test = testinger //.children.item(0);
          if (test instanceof SVGElement) {
            var panZoomTiger = svgPanZoom(test)
            // panZoomTiger.zoomBy(100);
            test.setAttribute('height', '550px');
            test.setAttribute('width', '900px');
            // panZoomTiger.resize(); // update SVG cached size and controls positions
            // panZoomTiger.fit();
            panZoomTiger.center();
          }

        }
    }
    fileReader.readAsText(this.file);
  }

}
