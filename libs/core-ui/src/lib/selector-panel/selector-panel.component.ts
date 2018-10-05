import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hcl-ers-selector-panel',
  templateUrl: './selector-panel.component.html',
  styleUrls: ['./selector-panel.component.scss']
})
export class SelectorPanelComponent implements OnInit {
  selected = 'None';
  selectedSub = 'None';
  mybreeds: Map<string, any[]>;
  mainBreeds: string[] = new Array<string>();
  subBreeds: any[] = new Array<any>();
  subBreedsMap: Map<string, string[]> = new Map<string, string[]>();
  // @Input() breeds: Map<string, any[]>;;

  @Input()
  set breeds(data: Map<string, any[]>) {
    if (data) {
      // console.log(data);
      this.mybreeds = data;
      const self = this;
      Object.keys(data).forEach(function(key) {
        self.mainBreeds.push(key);
        const values: string[] = self.subBreedsMap.get(key)
          ? self.subBreedsMap.get(key)
          : [];
        if (data[key]) {
          values.push(data[key]);
          self.subBreedsMap.set(key, values);
        }
      });

      //  this.mybreeds.values();
      //   console.log(this.mybreeds.entries());
    }
    if (this.mainBreeds[0]) {
      this.selected = this.mainBreeds[0];
    }
    console.log(this.mainBreeds);
    console.log(this.subBreedsMap);
  }

  constructor() {}

  ngOnInit() {}

  onSelect(value: any) {
    this.selected = value;
    this.subBreeds = this.subBreedsMap.get(value);
    if (this.hasSubCategories()) {
      this.selectedSub = this.subBreeds[0][0];
    }
    console.log(this.subBreeds, this.subBreeds[0].length);
  }

  onSelectSub(value: any) {
    this.selectedSub = value;
    console.log(value);
  }

  hasSubCategories() {
    return this.subBreeds[0] && this.subBreeds[0].length > 0;
  }
}
