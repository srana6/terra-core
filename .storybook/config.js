import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';

// addon-info
setDefaults({
  header: false,
  inline: window.innerWidth > 1024,
});

const styles = {
  paddingTop: 30,
  paddingLeft: 20,
  paddingRight: 20,
  paddingBottom: 20,
};

const Padding = (storyFn) => (
  <div style={styles}>
    { storyFn() }
  </div>
);

addDecorator(Padding);

function loadStories() {
  require('../packages/terra-badge/stories/index.jsx');
  require('../packages/terra-demographics-banner/stories/index.jsx');
}

configure(loadStories, module);
