import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

export interface NavElement {
  label: string;
  route: string;
}

@Component({
  selector: 'hcl-ers-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('nav-title') navTitle = 'Pet Clinic';

  // tslint:disable-next-line:no-input-rename
  @Input('nav-elements') elements: Array<NavElement> = [
    { label: 'About', route: 'about' },
    { label: 'Products', route: 'products' },
    { label: 'Login', route: 'login' }
  ];
  constructor(private router: Router) {}

  ngOnInit() {}

  public onAbout() {
    this.router.navigate(['about']);
  }

  public onProducts() {
    this.router.navigate(['products']);
  }

  public onLogin() {
    this.router.navigate(['login']);
  }
}
