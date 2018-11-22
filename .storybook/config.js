import { configure } from '@storybook/angular';

function loadStories() {

    require('../stories');
     // automatically import all story ts files that end with *.stories.ts
    const req = require.context('../stories', true, /\.stories\.ts$/);
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);