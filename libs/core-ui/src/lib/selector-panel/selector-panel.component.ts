import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hcl-ers-selector-panel',
  templateUrl: './selector-panel.component.html',
  styleUrls: ['./selector-panel.component.scss']
})
export class SelectorPanelComponent implements OnInit {
  selected = 'option2';
  //mybreeds: Map<string, any[]>;
  @Input() breeds: Map<string, any[]>;;

  /* @Input()
  set breeds(data: Breeds) {
    if (data && data.breeds) {
      console.log(data.breeds);
      this.mybreeds = data.breeds;
      //  this.mybreeds.values();
      //   console.log(this.mybreeds.entries());
    }
  } */

  constructor() {}

  ngOnInit() {}

  onSelect(value: any) {
    console.log(value);
  }
}
