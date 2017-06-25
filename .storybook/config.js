import { configure } from '@storybook/react';
import '../node_modules/bootstrap/scss/bootstrap.scss';

function loadStories() {
  require('../stories/index.js');
}

configure(loadStories, module);
