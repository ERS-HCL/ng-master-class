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
  @Input() hasSubBreed: boolean;
  @Output() OnBuy = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  public onBuy() {
    this.OnBuy.emit(100);
  }
}
