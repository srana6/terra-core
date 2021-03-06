/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Spacer from 'terra-spacer';
import Button from 'terra-button';
import './Spacer.scss';

const SpacerExample = () => (
  <div>
    <Spacer className="spacerdemodefault" paddingTop="large+4" paddingBottom="large+4" paddingLeft="large+4" paddingRight="large+4" isInlineBlock >
      <Button text="Default" />
    </Spacer>
    <Spacer className="spacerdemoprimary" paddingTop="large+2" paddingBottom="large+2" paddingLeft="large+2" paddingRight="large+2" isInlineBlock >
      <Button text="Primary" variant="primary" />
    </Spacer>
  </div>
);

export default SpacerExample;
