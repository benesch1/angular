import { Component, OnInit } from '@angular/core';
import { SvgItemService } from '../services/svg-item.service';

@Component({
  selector: 'app-item-tree',
  templateUrl: './item-tree.component.html',
  styleUrls: ['./item-tree.component.css']
})
export class ItemTreeComponent implements OnInit {
  svgItems = this.svgItemService.getItems();

  constructor(
    private svgItemService: SvgItemService
  ) {}

  ngOnInit(): void {
  }

}
