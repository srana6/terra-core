/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Base from '../../terra-base/src/Base';
import Image from '../../terra-image/src/Image';
import DemographicsBanner from '../src/DemographicsBanner';
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ReadMe from '!raw-loader!../docs/README.md';
import { mockAvatarImg } from '../../../.storybook/mock-data';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

storiesOf('Demographics Banner', module)
.addDecorator((story, context) => withInfo(ReadMe)(story)(context))
.add('Populated', () => (
  <Base locale={locale}>
    <DemographicsBanner
      id="populated-demographics"
      applicationContent={<span>St. Johns West Wing Room Cardiac Unit 253</span>}
      age="25 Years"
      dateOfBirth="May 9, 1993"
      gestationalAge="May 11, 1993"
      postMenstrualAge="May 13, 1993"
      photo={<Image alt="Avatar" src={mockAvatarImg} height="35" />}
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
  </Base>
))
.add('Blank', () => (
  <Base locale={locale}>
    <DemographicsBanner id="blank-demographics-banner" />
  </Base>
))
.add('Deceased', () => (
  <Base locale={locale}>
    <DemographicsBanner
      id="deceased-demographics"
      applicationContent={<span className="risk-score">5%</span>}
      age="25 Years"
      dateOfBirth="May 9, 1992"
      deceasedDate="March 12, 2017"
      photo={<Image alt="Avatar" src={mockAvatarImg} height="35" />}
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
  </Base>
))
.add('Gestational Age and Post Menstrual Age', () => (
  <Base locale={locale}>
    <DemographicsBanner
      applicationContent={<span className="risk-score">5%</span>}
      age="65 Years"
      dateOfBirth="May 9, 1993"
      gender="Female"
      gestationalAge="April 5, 2016"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Jane Doe"
      postMenstrualAge="April 7, 2016"
      preferredFirstName="Jane"
    />
  </Base>
))
.add('Additional Details', () => (
  <Base locale={locale}>
    <DemographicsBanner
      applicationContent={<span>St. Johns Kansas City West Wing Room Cardiac Arrest Unit 253</span>}
      age="25 Years"
      dateOfBirth="May 9, 1993"
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
  </Base>
))
.add('Populated 1', () => (
  <Base locale={locale}>
    <DemographicsBanner
      id="populated-demographics"
      applicationContent={<span>St. Johns West Wing Room Cardiac Unit 253</span>}
      age="25 Years"
      dateOfBirth="May 9, 1993"
      gestationalAge="May 11, 1993"
      postMenstrualAge="May 13, 1993"
      photo={<Image alt="Avatar" src={mockAvatarImg} height="35" />}
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
  </Base>
))
.add('Blank 2', () => (
  <Base locale={locale}>
    <DemographicsBanner id="blank-demographics-banner" />
  </Base>
))
.add('Deceased 3', () => (
  <Base locale={locale}>
    <DemographicsBanner
      id="deceased-demographics"
      applicationContent={<span className="risk-score">5%</span>}
      age="25 Years"
      dateOfBirth="May 9, 1992"
      deceasedDate="March 12, 2017"
      photo={<Image alt="Avatar" src={mockAvatarImg} height="35" />}
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
  </Base>
))
.add('Gestational Age and Post Menstrual Age 4', () => (
  <Base locale={locale}>
    <DemographicsBanner
      applicationContent={<span className="risk-score">5%</span>}
      age="65 Years"
      dateOfBirth="May 9, 1993"
      gender="Female"
      gestationalAge="April 5, 2016"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Jane Doe"
      postMenstrualAge="April 7, 2016"
      preferredFirstName="Jane"
    />
  </Base>
))
.add('Additional Details 5', () => (
  <Base locale={locale}>
    <DemographicsBanner
      applicationContent={<span>St. Johns Kansas City West Wing Room Cardiac Arrest Unit 253</span>}
      age="25 Years"
      dateOfBirth="May 9, 1993"
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
  </Base>
))
.add('Populated 6', () => (
  <Base locale={locale}>
    <DemographicsBanner
      id="populated-demographics"
      applicationContent={<span>St. Johns West Wing Room Cardiac Unit 253</span>}
      age="25 Years"
      dateOfBirth="May 9, 1993"
      gestationalAge="May 11, 1993"
      postMenstrualAge="May 13, 1993"
      photo={<Image alt="Avatar" src={mockAvatarImg} height="35" />}
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
  </Base>
))
.add('Blank 7', () => (
  <Base locale={locale}>
    <DemographicsBanner id="blank-demographics-banner" />
  </Base>
))
.add('Deceased 8', () => (
  <Base locale={locale}>
    <DemographicsBanner
      id="deceased-demographics"
      applicationContent={<span className="risk-score">5%</span>}
      age="25 Years"
      dateOfBirth="May 9, 1992"
      deceasedDate="March 12, 2017"
      photo={<Image alt="Avatar" src={mockAvatarImg} height="35" />}
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
  </Base>
))
.add('Gestational Age and Post Menstrual Age 9', () => (
  <Base locale={locale}>
    <DemographicsBanner
      applicationContent={<span className="risk-score">5%</span>}
      age="65 Years"
      dateOfBirth="May 9, 1993"
      gender="Female"
      gestationalAge="April 5, 2016"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Jane Doe"
      postMenstrualAge="April 7, 2016"
      preferredFirstName="Jane"
    />
  </Base>
))
.add('Additional Details 10', () => (
  <Base locale={locale}>
    <DemographicsBanner
      applicationContent={<span>St. Johns Kansas City West Wing Room Cardiac Arrest Unit 253</span>}
      age="25 Years"
      dateOfBirth="May 9, 1993"
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
  </Base>
))
.add('Populated 11', () => (
  <Base locale={locale}>
    <DemographicsBanner
      id="populated-demographics"
      applicationContent={<span>St. Johns West Wing Room Cardiac Unit 253</span>}
      age="25 Years"
      dateOfBirth="May 9, 1993"
      gestationalAge="May 11, 1993"
      postMenstrualAge="May 13, 1993"
      photo={<Image alt="Avatar" src={mockAvatarImg} height="35" />}
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
  </Base>
))
.add('Blank 12', () => (
  <Base locale={locale}>
    <DemographicsBanner id="blank-demographics-banner" />
  </Base>
))
.add('Deceased 13', () => (
  <Base locale={locale}>
    <DemographicsBanner
      id="deceased-demographics"
      applicationContent={<span className="risk-score">5%</span>}
      age="25 Years"
      dateOfBirth="May 9, 1992"
      deceasedDate="March 12, 2017"
      photo={<Image alt="Avatar" src={mockAvatarImg} height="35" />}
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
  </Base>
))
.add('Gestational Age and Post Menstrual Age 14', () => (
  <Base locale={locale}>
    <DemographicsBanner
      applicationContent={<span className="risk-score">5%</span>}
      age="65 Years"
      dateOfBirth="May 9, 1993"
      gender="Female"
      gestationalAge="April 5, 2016"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Jane Doe"
      postMenstrualAge="April 7, 2016"
      preferredFirstName="Jane"
    />
  </Base>
))
.add('Additional Details 15', () => (
  <Base locale={locale}>
    <DemographicsBanner
      applicationContent={<span>St. Johns Kansas City West Wing Room Cardiac Arrest Unit 253</span>}
      age="25 Years"
      dateOfBirth="May 9, 1993"
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
  </Base>
))
.add('Populated 16', () => (
  <Base locale={locale}>
    <DemographicsBanner
      id="populated-demographics"
      applicationContent={<span>St. Johns West Wing Room Cardiac Unit 253</span>}
      age="25 Years"
      dateOfBirth="May 9, 1993"
      gestationalAge="May 11, 1993"
      postMenstrualAge="May 13, 1993"
      photo={<Image alt="Avatar" src={mockAvatarImg} height="35" />}
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
  </Base>
))
.add('Blank 17', () => (
  <Base locale={locale}>
    <DemographicsBanner id="blank-demographics-banner" />
  </Base>
))
.add('Deceased 18', () => (
  <Base locale={locale}>
    <DemographicsBanner
      id="deceased-demographics"
      applicationContent={<span className="risk-score">5%</span>}
      age="25 Years"
      dateOfBirth="May 9, 1992"
      deceasedDate="March 12, 2017"
      photo={<Image alt="Avatar" src={mockAvatarImg} height="35" />}
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
  </Base>
))
.add('Gestational Age and Post Menstrua 19l Age', () => (
  <Base locale={locale}>
    <DemographicsBanner
      applicationContent={<span className="risk-score">5%</span>}
      age="65 Years"
      dateOfBirth="May 9, 1993"
      gender="Female"
      gestationalAge="April 5, 2016"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Jane Doe"
      postMenstrualAge="April 7, 2016"
      preferredFirstName="Jane"
    />
  </Base>
))
.add('Additional Det2ails', () => (
  <Base locale={locale}>
    <DemographicsBanner
      applicationContent={<span>St. Johns Kansas City West Wing Room Cardiac Arrest Unit 253</span>}
      age="25 Years"
      dateOfBirth="May 9, 1993"
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
  </Base>
))
.add('Popul2ated', () => (
  <Base locale={locale}>
    <DemographicsBanner
      id="populated-demographics"
      applicationContent={<span>St. Johns West Wing Room Cardiac Unit 253</span>}
      age="25 Years"
      dateOfBirth="May 9, 1993"
      gestationalAge="May 11, 1993"
      postMenstrualAge="May 13, 1993"
      photo={<Image alt="Avatar" src={mockAvatarImg} height="35" />}
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
  </Base>
))
.add('Bla1nk', () => (
  <Base locale={locale}>
    <DemographicsBanner id="blank-demographics-banner" />
  </Base>
))
.add('Dece2ased', () => (
  <Base locale={locale}>
    <DemographicsBanner
      id="deceased-demographics"
      applicationContent={<span className="risk-score">5%</span>}
      age="25 Years"
      dateOfBirth="May 9, 1992"
      deceasedDate="March 12, 2017"
      photo={<Image alt="Avatar" src={mockAvatarImg} height="35" />}
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
  </Base>
))
.add('Gesta1tional Age and Post Menstrual Age', () => (
  <Base locale={locale}>
    <DemographicsBanner
      applicationContent={<span className="risk-score">5%</span>}
      age="65 Years"
      dateOfBirth="May 9, 1993"
      gender="Female"
      gestationalAge="April 5, 2016"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Jane Doe"
      postMenstrualAge="April 7, 2016"
      preferredFirstName="Jane"
    />
  </Base>
))
.add('Additio2nal Details', () => (
  <Base locale={locale}>
    <DemographicsBanner
      applicationContent={<span>St. Johns Kansas City West Wing Room Cardiac Arrest Unit 253</span>}
      age="25 Years"
      dateOfBirth="May 9, 1993"
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
  </Base>
))
.add('Popula2ted', () => (
  <Base locale={locale}>
    <DemographicsBanner
      id="populated-demographics"
      applicationContent={<span>St. Johns West Wing Room Cardiac Unit 253</span>}
      age="25 Years"
      dateOfBirth="May 9, 1993"
      gestationalAge="May 11, 1993"
      postMenstrualAge="May 13, 1993"
      photo={<Image alt="Avatar" src={mockAvatarImg} height="35" />}
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
  </Base>
))
.add('Blan3k', () => (
  <Base locale={locale}>
    <DemographicsBanner id="blank-demographics-banner" />
  </Base>
))
.add('Dec3eased', () => (
  <Base locale={locale}>
    <DemographicsBanner
      id="deceased-demographics"
      applicationContent={<span className="risk-score">5%</span>}
      age="25 Years"
      dateOfBirth="May 9, 1992"
      deceasedDate="March 12, 2017"
      photo={<Image alt="Avatar" src={mockAvatarImg} height="35" />}
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
  </Base>
))
.add('Gestat3ional Age and Post Menstrual Age', () => (
  <Base locale={locale}>
    <DemographicsBanner
      applicationContent={<span className="risk-score">5%</span>}
      age="65 Years"
      dateOfBirth="May 9, 1993"
      gender="Female"
      gestationalAge="April 5, 2016"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Jane Doe"
      postMenstrualAge="April 7, 2016"
      preferredFirstName="Jane"
    />
  </Base>
))
.add('Additi4onal Details', () => (
  <Base locale={locale}>
    <DemographicsBanner
      applicationContent={<span>St. Johns Kansas City West Wing Room Cardiac Arrest Unit 253</span>}
      age="25 Years"
      dateOfBirth="May 9, 1993"
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
  </Base>
))
.add('Popul4ated', () => (
  <Base locale={locale}>
    <DemographicsBanner
      id="populated-demographics"
      applicationContent={<span>St. Johns West Wing Room Cardiac Unit 253</span>}
      age="25 Years"
      dateOfBirth="May 9, 1993"
      gestationalAge="May 11, 1993"
      postMenstrualAge="May 13, 1993"
      photo={<Image alt="Avatar" src={mockAvatarImg} height="35" />}
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
  </Base>
))
.add('Bla4nk', () => (
  <Base locale={locale}>
    <DemographicsBanner id="blank-demographics-banner" />
  </Base>
))
.add('Decease4d', () => (
  <Base locale={locale}>
    <DemographicsBanner
      id="deceased-demographics"
      applicationContent={<span className="risk-score">5%</span>}
      age="25 Years"
      dateOfBirth="May 9, 1992"
      deceasedDate="March 12, 2017"
      photo={<Image alt="Avatar" src={mockAvatarImg} height="35" />}
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
  </Base>
))
.add('Ges5tational Age and Post Menstrual Age', () => (
  <Base locale={locale}>
    <DemographicsBanner
      applicationContent={<span className="risk-score">5%</span>}
      age="65 Years"
      dateOfBirth="May 9, 1993"
      gender="Female"
      gestationalAge="April 5, 2016"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Jane Doe"
      postMenstrualAge="April 7, 2016"
      preferredFirstName="Jane"
    />
  </Base>
))
.add('Additio5nal Details', () => (
  <Base locale={locale}>
    <DemographicsBanner
      applicationContent={<span>St. Johns Kansas City West Wing Room Cardiac Arrest Unit 253</span>}
      age="25 Years"
      dateOfBirth="May 9, 1993"
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
  </Base>
))
.add('Popul6ated', () => (
  <Base locale={locale}>
    <DemographicsBanner
      id="populated-demographics"
      applicationContent={<span>St. Johns West Wing Room Cardiac Unit 253</span>}
      age="25 Years"
      dateOfBirth="May 9, 1993"
      gestationalAge="May 11, 1993"
      postMenstrualAge="May 13, 1993"
      photo={<Image alt="Avatar" src={mockAvatarImg} height="35" />}
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
  </Base>
))
.add('Bla6nk', () => (
  <Base locale={locale}>
    <DemographicsBanner id="blank-demographics-banner" />
  </Base>
))
.add('Dec6eased', () => (
  <Base locale={locale}>
    <DemographicsBanner
      id="deceased-demographics"
      applicationContent={<span className="risk-score">5%</span>}
      age="25 Years"
      dateOfBirth="May 9, 1992"
      deceasedDate="March 12, 2017"
      photo={<Image alt="Avatar" src={mockAvatarImg} height="35" />}
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
  </Base>
))
.add('Gestat6ional Age and Post Menstrual Age', () => (
  <Base locale={locale}>
    <DemographicsBanner
      applicationContent={<span className="risk-score">5%</span>}
      age="65 Years"
      dateOfBirth="May 9, 1993"
      gender="Female"
      gestationalAge="April 5, 2016"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Jane Doe"
      postMenstrualAge="April 7, 2016"
      preferredFirstName="Jane"
    />
  </Base>
))
.add('Additi6onal Details', () => (
  <Base locale={locale}>
    <DemographicsBanner
      applicationContent={<span>St. Johns Kansas City West Wing Room Cardiac Arrest Unit 253</span>}
      age="25 Years"
      dateOfBirth="May 9, 1993"
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
  </Base>
))
.add('Popu7lated', () => (
  <Base locale={locale}>
    <DemographicsBanner
      id="populated-demographics"
      applicationContent={<span>St. Johns West Wing Room Cardiac Unit 253</span>}
      age="25 Years"
      dateOfBirth="May 9, 1993"
      gestationalAge="May 11, 1993"
      postMenstrualAge="May 13, 1993"
      photo={<Image alt="Avatar" src={mockAvatarImg} height="35" />}
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
  </Base>
))
.add('Blan7k', () => (
  <Base locale={locale}>
    <DemographicsBanner id="blank-demographics-banner" />
  </Base>
))
.add('Dece7ased', () => (
  <Base locale={locale}>
    <DemographicsBanner
      id="deceased-demographics"
      applicationContent={<span className="risk-score">5%</span>}
      age="25 Years"
      dateOfBirth="May 9, 1992"
      deceasedDate="March 12, 2017"
      photo={<Image alt="Avatar" src={mockAvatarImg} height="35" />}
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
  </Base>
))
.add('Gest7ational Age and Post Menstrual Age', () => (
  <Base locale={locale}>
    <DemographicsBanner
      applicationContent={<span className="risk-score">5%</span>}
      age="65 Years"
      dateOfBirth="May 9, 1993"
      gender="Female"
      gestationalAge="April 5, 2016"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Jane Doe"
      postMenstrualAge="April 7, 2016"
      preferredFirstName="Jane"
    />
  </Base>
))
.add('Additi7onal Details Last Item', () => (
  <Base locale={locale}>
    <DemographicsBanner
      applicationContent={<span>St. Johns Kansas City West Wing Room Cardiac Arrest Unit 253</span>}
      age="25 Years"
      dateOfBirth="May 9, 1993"
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
  </Base>
));


storiesOf('Demographics Banner/Additional Test Cases', module)
.add('Deceased (No Label)', () => (
  <Base locale={locale}>
    <DemographicsBanner id="deceased-demographics-no-label" deceasedDate="March 12, 2017" />
  </Base>
))
.add('Gestational Age (No Label)', () => (
  <Base locale={locale}>
    <DemographicsBanner id="gestational-age-no-label" gestationalAge="April 5, 2016" />
  </Base>
))
.add('Post Menstrual (No Label)', () => (
  <Base locale={locale}>
    <DemographicsBanner id="post-menstrual-no-label" postMenstrualAge="April 5, 2016" />
  </Base>
));
