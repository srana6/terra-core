import React from 'react';
import { configure, addDecorator } from '@storybook/react';

const styles = {
  padding: 20
};

const Padding = (storyFn) => (
  <div style={styles}>
    { storyFn() }
  </div>
);

addDecorator(Padding);

// Autoload stories via glob pattern
function loadStories() {
  require('glob-loader!./stories.pattern')
}

configure(loadStories, module);
