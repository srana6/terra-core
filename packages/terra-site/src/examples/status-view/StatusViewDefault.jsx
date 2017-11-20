import React from 'react';
import StatusView from 'terra-status-view';
import Button from 'terra-button';

const StatusViewDefault = () => (
  <div style={{height: '500px', border: '1px solid black'}}>
    <StatusView
      type="nodata"
      title="No Data Titlte thaltjsdlfjlsdkf lsdj lksdj fklasdjf kl;asdj fl;kasdj flajsdlk fjsadklf jasdklfj alsd;kjf kl;adsjf l;kasdj fl;kasdj ;fsd flkasd kdljs"
      message="404 was returned from the service alsdj fl;asdj flkasdjflkasdj flk;sdajf klsadjflk sadjlfkajsdlk;f jasdl;kfjas dlkfjasdlkjfaklsd;j flkasdjflk;ads"
      buttons={[<Button text="OK" />, <Button text="Cancel" />]}
    />
  </div>
);

export default StatusViewDefault;
