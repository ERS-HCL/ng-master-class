import { storiesOf, moduleMetadata } from '@storybook/angular';
import { CoreUiModule } from '@hcl-ers/core-ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

storiesOf('Core UI', module)
.addDecorator(
    moduleMetadata({
      imports: [CoreUiModule,BrowserAnimationsModule]
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
  }));