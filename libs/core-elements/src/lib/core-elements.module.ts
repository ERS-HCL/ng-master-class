import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent],
  entryComponents: [ButtonComponent]
})
export class CoreElementsModule {
  constructor(private injector: Injector) {
    const customButton = createCustomElement(ButtonComponent, { injector });
    customElements.define('hcl-ers-button', customButton);
  }

  ngDoBootstrap() {}
}
