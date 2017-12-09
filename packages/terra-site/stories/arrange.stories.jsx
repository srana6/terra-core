/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ArrangeExamples from '../src/examples/arrange/Index';

storiesOf('Arrange', module)
.add('Default', () => (
  <ArrangeExamples />
));
