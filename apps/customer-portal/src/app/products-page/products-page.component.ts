import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hcl-ers-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onBuy($event): void {
    this.router.navigate(['user-registration']);
  }
}
