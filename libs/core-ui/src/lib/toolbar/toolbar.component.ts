import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hcl-ers-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  public onAbout() {
    this.router.navigate(['about']);
  }

  public onProducts() {
    this.router.navigate(['products']);
  }
}