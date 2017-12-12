import React from 'react';
import Base from 'terra-base/src/Base';
import DemographicsBanner from 'terra-demographics-banner/src/DemographicsBanner';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const BasicDemographicsBanner = () => (
  <Base locale={locale}>
    <DemographicsBanner
      age="25 Years"
      dateOfBirth="May 9, 1993"
      gender="Male"
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
  </Base>
);

export default BasicDemographicsBanner;
