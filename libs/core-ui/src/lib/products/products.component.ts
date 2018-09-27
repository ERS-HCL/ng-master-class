import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DogService } from '@hcl-ers/data-services';

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

  constructor(private router: Router, private _dogService: DogService) {}

  ngOnInit() {
    this._dogService
      .getBreeds()
      .subscribe(res => console.log(res), error => console.log(error));
  }

  public onBuy() {
    this.router.navigate(['user-registration']);
  }
}