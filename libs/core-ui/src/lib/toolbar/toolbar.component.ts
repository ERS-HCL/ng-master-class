import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input('nav-title') navTitle = 'Puppy Paws Pets';
  @Input() cartItemCount: number;
  @Input() loggedIn = false;
  // tslint:disable-next-line:no-input-rename
  @Input('nav-elements')
  elements: Array<NavElement> = [
    { label: 'About', route: 'about' },
    { label: 'Products', route: 'products' },
    { label: 'Login', route: 'login' }
  ];
  @Output() OnLogin = new EventEmitter();
  @Output() OnLogOut = new EventEmitter();
  constructor(private router: Router) {}

  ngOnInit() {}

  onLogin() {
    this.OnLogin.emit();
  }

  onLogOut() {
    this.OnLogOut.emit();
  }
}
