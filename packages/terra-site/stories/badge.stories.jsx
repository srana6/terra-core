/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import BadgeIcon from '../src/examples/badge/BadgeIcon';
import BadgeIntent from '../src/examples/badge/BadgeIntent';
import BadgeSize from '../src/examples/badge/BadgeSize';


storiesOf('Badge', module)
.add('Intent', () => (
  <BadgeIntent />
))
.add('Size', () => (
  <BadgeSize />
))
.add('Icon', () => (
  <BadgeIcon />
));
