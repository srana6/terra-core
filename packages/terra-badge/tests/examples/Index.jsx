/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Docs from './Docs';
import BadgeIcon from './BadgeIcon';
import BadgeIntent from './BadgeIntent';
import BadgeSize from './BadgeSize';

storiesOf('Badge', module)
.add('Docs', () => (
  <Docs />
));

storiesOf('Badge/Examples', module)
.add('Intent', () => (
  <BadgeIntent />
))
.add('Icon', () => (
  <BadgeIcon />
))
.add('Size', () => (
  <BadgeSize />
));
