import React from 'react';
import Base from 'terra-base';
import DemographicsBanner from '../../src/DemographicsBanner';

const BasicDemographicsBanner = () => (
  <Base locale="en-US">
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
