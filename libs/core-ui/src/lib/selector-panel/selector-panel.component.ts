import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Output() breedSelected = new EventEmitter();
  @Output() hasSubBreed = new EventEmitter();
  @Output() subBreedSelected = new EventEmitter();
  @Input() breedImages: string[];
  @Input()
  set breeds(data: Map<string, any[]>) {
    if (data) {
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
    }
    // Select the first breed by default
    // If there are sub breeds select the first for that as well
    if (this.mainBreeds[0]) {
      this.selected = this.mainBreeds[0];
      this.breedSelected.emit(this.selected);
      this.initSubBreeds();
    }
    //   console.log(this.mainBreeds);
    //   console.log(this.subBreedsMap);
  }

  constructor() {}

  ngOnInit() {}

  onSelect(value: any) {
    this.selected = value;
    this.breedSelected.emit(this.selected);
    this.subBreeds = this.subBreedsMap.get(value);
    this.initSubBreeds();
    //  console.log(this.subBreeds, this.subBreeds[0].length);
  }

  onSelectSub(value: any) {
    this.selectedSub = value;
    this.hasSubBreed.emit(true);
    this.subBreedSelected.emit(this.selectedSub);
  }

  initSubBreeds() {
    if (this.hasSubCategories()) {
      this.selectedSub = this.subBreeds[0][0];
      this.hasSubBreed.emit(true);
      this.subBreedSelected.emit(this.selectedSub);
    } else {
      this.hasSubBreed.emit(false);
      this.subBreedSelected.emit(undefined);
    }
  }

  hasSubCategories() {
    return this.subBreeds[0] && this.subBreeds[0].length > 0;
  }
}
