import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
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

  @Input() breedImages: string[];
  @Input() subBreedImages: string[];
  @Input() breedImagesLoaded: boolean;
  @Input() subBreedImagesLoaded: boolean;
  @Input() breedUnitPrice: number;
  @Input() hasSubBreed: boolean;
  @Input() cartItemCount: number;
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

  public onBuy() {
    this.OnBuy.emit(this.breedUnitPrice);
  }

  public onCheckOut() {
    this.OnCheckout.emit();
  }
}
