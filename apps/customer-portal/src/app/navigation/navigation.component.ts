import { Component, OnInit } from '@angular/core';
import { NavElement } from '@hcl-ers/core-ui';

@Component({
  selector: 'hcl-ers-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  navTitle = 'Pet Clinic';

  // tslint:disable-next-line:no-input-rename
  navElements: Array<NavElement> = [
    { label: 'About', route: 'about' },
    { label: 'Products', route: 'products' },
    { label: 'Login', route: 'login' }
  ];
  constructor() {}

  ngOnInit() {}
}
