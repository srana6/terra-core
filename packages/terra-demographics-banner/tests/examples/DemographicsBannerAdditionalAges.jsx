import React from 'react';
import Base from 'terra-base';
import Image from 'terra-image';
import DemographicsBanner from '../../src/DemographicsBanner';
import demographicsImage from '../assets/demographicsCat.jpg';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const DemographicsBannerAdditionalAges = () => (
  <Base locale={locale}>
    <DemographicsBanner
      applicationContent={<span className="risk-score">5%</span>}
      age="25 Years"
      dateOfBirth="May 9, 1993"
      gender="Male"
      gestationalAge="April 5, 2016"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      photo={<Image alt="My Cat" src={demographicsImage} />}
      personName="Johnathon Doe"
      postMenstrualAge="April 7, 2016"
      preferredFirstName="John"
    />
  </Base>
);

export default DemographicsBannerAdditionalAges;
