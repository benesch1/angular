import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SVGItem, svgItems } from '../svgItem';

@Injectable({
  providedIn: 'root'
})
export class SvgItemService {

  items: any[] = [];
  constructor(private http: HttpClient) {}

  addToItemList(svg : any) {
      this.items.push(svg);
  }

  getItems() {
    return this.items;
  }

  clearItemList() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
