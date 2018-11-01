import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'hcl-ers-button',
  template: `
  <button (click)="handleClick()">{{label}}</button>
  `,
  styles: [
    `
      button {
        border: solid 3px;
        padding: 8px 10px;
        background: #bada55;
        font-size: 20px;
      }
    `
  ],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent implements OnInit {
  @Input() label = 'default label';
  @Output() action = new EventEmitter<number>();
  private clicksCt = 0;

  handleClick() {
    this.clicksCt++;
    this.action.emit(this.clicksCt);
  }

  constructor() {}

  ngOnInit() {}
}
