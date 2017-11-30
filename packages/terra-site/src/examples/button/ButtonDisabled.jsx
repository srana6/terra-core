import React from 'react';
import Button from 'terra-button';

const buttonStyle = { margin: '5px' };

const ButtonDisabled = () => (
  <div>
    <Button text="Disabled Button" isDisabled style={buttonStyle} />
    <Button text="Disabled Emphasis" variant="emphasis" isDisabled style={buttonStyle} />
    <Button text="Disabled De-emphasis" variant="de-emphasis" isDisabled style={buttonStyle} />
  </div>
);

export default ButtonDisabled;
