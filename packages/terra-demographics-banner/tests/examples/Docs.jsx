/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Base from 'terra-base';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from '../../docs/README.md';
import { version } from '../../package.json';
import DemographicsBanner from '../../src/DemographicsBanner';

import DemographicsBannerAdditionalAges from './DemographicsBannerAdditionalAges';
import DemographicsBannerAdditionalDetails from './DemographicsBannerAdditionalDetails';
import DemographicsBannerBasic from './DemographicsBannerBasic';
import DemographicsBannerDeceased from './DemographicsBannerDeceased';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import DemographicsBannerSrc from '!raw-loader!../../src/DemographicsBanner.jsx';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const DemographicsBannerExamples = () => (
  <Base locale={locale}>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={DemographicsBannerSrc} />
    <h1>Basic Demographics Banner</h1>
    <DemographicsBannerBasic />
    <br />
    <h1>Demographics Banner with Missing Data</h1>
    <DemographicsBanner />
    <br />
    <h1>Deceased Demographics Banners</h1>
    <DemographicsBannerDeceased />
    <br />
    <h1>Demographics Banner with Gestational and Post Menstrural ages</h1>
    <DemographicsBannerAdditionalAges />
    <br />
    <h1>Demographics Banner with Additional Details</h1>
    <DemographicsBannerAdditionalDetails />
  </Base>
);

export default DemographicsBannerExamples;
