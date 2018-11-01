import { Component, OnInit } from '@angular/core';
import { AppState } from './+state/app.reducer';
import { Store } from '@ngrx/store';
import { LoadApp, CreateCart } from './+state/app.actions';
import { fadeAnimation } from './animations';

@Component({
  selector: 'hcl-ers-root',
  animations: [fadeAnimation], // register the animation
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'customer-portal';
  myvalue: string;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.myvalue = 'This is a test';
    this.store.dispatch(new LoadApp());
    this.store.dispatch(new CreateCart());
    const mybutton = document.createElement('hcl-ers-button');
    mybutton.setAttribute('label', this.myvalue);
    mybutton.addEventListener('action', ($event: any) => {
      console.log($event.detail);
    });

    const content = document.getElementById('content');
    content.appendChild(mybutton);
  }

  public onAction($event) {
    console.log($event.detail);
  }
}
