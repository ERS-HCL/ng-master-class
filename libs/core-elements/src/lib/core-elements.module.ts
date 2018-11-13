import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { CommentsComponent } from './comments/comments.component';
import { MaterialModule } from '@hcl-ers/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [CommonModule, MaterialModule, BrowserAnimationsModule],
  declarations: [CommentsComponent],
  entryComponents: [CommentsComponent]
})
export class CoreElementsModule {
  constructor(private injector: Injector) {
    const customButton = createCustomElement(CommentsComponent, { injector });
    customElements.define('hcl-ers-comments', customButton);
  }

  ngDoBootstrap() {}
}
