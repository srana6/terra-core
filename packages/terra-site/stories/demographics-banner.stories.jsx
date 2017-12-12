/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import DemographicsBannerExamples from '../src/examples/demographics-banner/Index';

storiesOf('Demographics Banner', module)
.add('Examples', () => (
  <DemographicsBannerExamples />
));
