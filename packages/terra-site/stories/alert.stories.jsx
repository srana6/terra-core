/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Base from 'terra-base';
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import AlertExample from '../src/examples/alert/AlertExample';
import ErrorExample from '../src/examples/alert/ErrorExample';
import WarningExample from '../src/examples/alert/WarningExample';
import AdvisoryExample from '../src/examples/alert/AdvisoryExample';
import InfoExample from '../src/examples/alert/InfoExample';
import SuccessExample from '../src/examples/alert/SuccessExample';
import CustomExample from '../src/examples/alert/CustomExample';
import LongTextExample from '../src/examples/alert/LongTextExample';
import ActionExample from '../src/examples/alert/ActionExample';
import SmallContainerExample from '../src/examples/alert/SmallContainerExample';
import DismissibleExample from '../src/examples/alert/DismissibleExample';
import ActionAndDismissibleExample from '../src/examples/alert/ActionAndDismissibleExample';
import BuildYourOwnAlertExample from '../src/examples/alert/BuildYourOwnAlertExample';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

storiesOf('Alert', module)
.add('Default', () => (
  <Base locale={locale}>
    <AlertExample />
  </Base>
))
.add('Error', () => (
  <Base locale={locale}>
    <ErrorExample />
  </Base>
))
.add('Warning', () => (
  <Base locale={locale}>
    <WarningExample />
  </Base>
))
.add('Advisory', () => (
  <Base locale={locale}>
    <AdvisoryExample />
  </Base>
))
.add('InfoExample', () => (
  <Base locale={locale}>
    <InfoExample />
  </Base>
))
.add('SuccessExample', () => (
  <Base locale={locale}>
    <SuccessExample />
  </Base>
))
.add('CustomExample', () => (
  <Base locale={locale}>
    <CustomExample />
  </Base>
))
.add('LongTextExample', () => (
  <Base locale={locale}>
    <LongTextExample />
  </Base>
))
.add('ActionExample', () => (
  <Base locale={locale}>
    <ActionExample />
  </Base>
))
.add('SmallContainerExample', () => (
  <Base locale={locale}>
    <SmallContainerExample />
  </Base>
))
.add('DismissibleExample', () => (
  <Base locale={locale}>
    <DismissibleExample />
  </Base>
))
.add('ActionAndDismissibleExample', () => (
  <Base locale={locale}>
    <ActionAndDismissibleExample />
  </Base>
))
.add('BuildYourOwnAlertExample', () => (
  <Base locale={locale}>
    <BuildYourOwnAlertExample />
  </Base>
));
