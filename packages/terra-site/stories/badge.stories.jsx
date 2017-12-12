/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import BadgeExamples from '../src/examples/badge/Index';


storiesOf('Badge', module)
.add('Examples', () => (
  <BadgeExamples />
));
