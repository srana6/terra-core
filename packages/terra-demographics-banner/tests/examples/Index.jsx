/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Docs from './Docs';
import DemographicsBannerAdditionalAges from './DemographicsBannerAdditionalAges';
import DemographicsBannerAdditionalDetails from './DemographicsBannerAdditionalDetails';
import DemographicsBannerBasic from './DemographicsBannerBasic';
import DemographicsBannerDeceased from './DemographicsBannerDeceased';

storiesOf('Demographics Banner', module)
.add('Docs', () => (
  <Docs />
));

storiesOf('Demographics Banner/Examples', module)
.add('Basic', () => (
  <DemographicsBannerBasic />
))
.add('Additional Ages', () => (
  <DemographicsBannerAdditionalAges />
))
.add('Additional Details', () => (
  <DemographicsBannerAdditionalDetails />
))
.add('Deceased', () => (
  <DemographicsBannerDeceased />
));
