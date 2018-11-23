import { storiesOf, moduleMetadata } from '@storybook/angular';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { CoreUiModule, ToolbarComponent } from '@hcl-ers/core-ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { Observable } from 'rxjs';
import { MaterialModule } from '@hcl-ers/material';
import { RouterTestingModule } from '@angular/router/testing';

storiesOf('Chapter 2: Core UI Library', module)
.addDecorator(withKnobs)
.addDecorator(
    moduleMetadata({
      imports: [MaterialModule,CoreUiModule,BrowserAnimationsModule,  RouterTestingModule.withRoutes([])],
      providers: [{ provide: APP_BASE_HREF, useValue : '' }]
    })
  )
  .add('Login Component with loading off', () => ({
    template: `<hcl-ers-login [(loading)]="loading" (OnLogin)="onLogin($event)"></hcl-ers-login>`,
    props: {
      loading: false,
      onLogin: event => {
        console.log('some bindings work');
        console.log(event);
      },
    },
  }))
  .add('Login Component with loading on', () => ({
    template: `<hcl-ers-login [(loading)]="loading" (OnLogin)="onLogin($event)"></hcl-ers-login>`,
    props: {
      loading: true,
      onLogin: event => {
        console.log('some bindings work');
        console.log(event);
      },
    },
  }))
  .add('Login Component with knobs', () => ({
    template: `<hcl-ers-login [(loading)]="loading" (OnLogin)="onLogin($event)"></hcl-ers-login>`,
    props: {
      loading: boolean('loading',true)
    }
  }));