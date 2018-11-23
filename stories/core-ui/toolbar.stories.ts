import { storiesOf, moduleMetadata } from '@storybook/angular';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { CoreUiModule, ToolbarComponent } from '@hcl-ers/core-ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { Observable } from 'rxjs';
import { MaterialModule } from '@hcl-ers/material';
import { RouterTestingModule } from '@angular/router/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSelectModule } from '@angular/material/select';


storiesOf('Chapter 2: Core UI Library', module)
.addDecorator(withKnobs)
.addDecorator(
    moduleMetadata({
      imports: [ MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatGridListModule,
        MatListModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatStepperModule,
        MatTableModule,
        MatChipsModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatBadgeModule,
        MatSelectModule,BrowserAnimationsModule,  RouterTestingModule.withRoutes([])],
      declarations: [ToolbarComponent],
      providers: [{ provide: APP_BASE_HREF, useValue : '' }]
    })
  )
  .add('Navigation Component', () => ({
    component: ToolbarComponent,
    props: {
      cartItemCount: 1,
      navTitle: 'Test',
      navElements:   [{ label: 'About', route: 'about' },
      { label: 'Puppies', route: '/' }],
      loggedIn: false
    },
  }))