import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hcl-ers-check-out-page',
  templateUrl: './check-out-page.component.html',
  styleUrls: ['./check-out-page.component.css']
})
export class CheckOutPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onPurchase($event): void {
    this.router.navigate(['/']);
  }
}
