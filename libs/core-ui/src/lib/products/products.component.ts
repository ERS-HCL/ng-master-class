import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

interface ShoppingCart {
  id?: string; // cart id
  lineItems?: LineItem[]; // cart line items
}

/**
 * cart line item details
 */
interface LineItem {
  id?: string; // line item id
  productName: string; // product name
  unitPrice?: number; // product variant unit price
  qty?: number;
}

@Component({
  selector: 'hcl-ers-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  breakpoint: number;
  tiles: Tile[] = [
    { text: 'One', cols: 4, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 2, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 2, color: '#DDBDF1' }
  ];
  @Input() selectedBreed: string;
  @Input() breedImages: string[];
  @Input() subBreedImages: string[];
  @Input() breedImagesLoaded: boolean;
  @Input() subBreedImagesLoaded: boolean;
  @Input() breedUnitPrice: number;
  @Input() hasSubBreed: boolean;
  @Input() cartItemCount: number;
  @Input() cart: ShoppingCart;
  @Input() breedAvailiabilty: boolean;
  @Output() OnBuy = new EventEmitter();
  @Output() OnCheckout = new EventEmitter();
  constructor() {}

  ngOnInit() {
    this.breakpoint =
      window.innerWidth <= 420 ? 1 : window.innerWidth <= 740 ? 2 : 4;
  }

  onResize(event) {
    this.breakpoint =
      window.innerWidth <= 420 ? 1 : window.innerWidth <= 740 ? 2 : 4;
  }

  public isItemInCart(): boolean {
    let result = false;
    result =
      this.cart.lineItems.filter(
        item => item.productName === this.selectedBreed
      ).length > 0;
    // console.log(result, this.breedAvailiabilty);
    return this.selectedBreed.length > 0  && result && this.breedAvailiabilty;
  }

  public onBuy() {
    this.OnBuy.emit(this.breedUnitPrice);
  }

  public onCheckOut() {
    this.OnCheckout.emit();
  }
}
