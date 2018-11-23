import { storiesOf } from '@storybook/angular';


storiesOf('Chapter 1: Overview', module)
.add('Introduction', () => ({
    template: `<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <style>
.base {
    margin: 10px;
    font-family: 'Roboto', sans-serif;
}
</style>
    <div class="base">
      <h1>Customer Portal</h1>
      <p>This is a living style guide</p>
    </div>
    `,
  }));