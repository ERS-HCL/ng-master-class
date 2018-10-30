import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

export interface ShoppingCart {
  id?: string; // cart id
  lineItems?: LineItem[]; // cart line items
}

export interface User {
  name: string;
  address: string;
}

/**
 * cart line item details
 */
export interface LineItem {
  id?: string; // line item id
  productName: string; // product name
  unitPrice?: number; // product variant unit price
  qty?: number;
}

const ELEMENT_DATA: LineItem[] = [
  { productName: 'Boxer', qty: 1, unitPrice: 100 },
  { productName: 'German Sheppard', qty: 1, unitPrice: 100 },
  { productName: 'Poodle', qty: 1, unitPrice: 100 }
];

@Component({
  selector: 'hcl-ers-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {
  displayedColumns: string[] = ['productName', 'qty', 'unitPrice', 'action'];
  dataSource = ELEMENT_DATA;
  total: number;
  @Input() user: User;
  @Input()
  set cart(cart: ShoppingCart) {
    this.dataSource = cart.lineItems;
    this.total = this.dataSource.reduce((c, v) => c + v.qty * v.unitPrice, 0);
  }

  @Output() OnPurchase = new EventEmitter();
  @Output() OnDelete = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public onDelete(row) {
    //    console.log(row);
    this.OnDelete.emit(row.productName);
  }
  public onPurchase() {
    this.OnPurchase.emit(100);
  }
}
