import { Actions } from '@ngrx/effects';
import { Observable, empty } from 'rxjs';

export class TestActions extends Actions {
  constructor() {
    super(empty());
  }
  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getTestActions() {
  return new TestActions();
}
