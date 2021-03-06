import React from 'react';
import Base from 'terra-base';
import Button from 'terra-button';
import Alert from '../../lib/Alert';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');
// eslint-disable-next-line no-console
console.log('Alert where alertAction prop provided containing an action button');

class AlertActionButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actionButtonClickCount: 0,
    };
    this.actionFunc = this.actionFunc.bind(this);
  }

  actionFunc() {
    const actionButtonClickCount = this.state.actionButtonClickCount + 1;
    this.setState({ actionButtonClickCount });
  }

  render() {
    return (
      <div>
        <Base locale={locale}>
          <Alert id="actionAlert" type={Alert.Opts.Types.WARNING} action={<Button text="Action" size="medium" variant="primary" onClick={this.actionFunc} />} >
            This is a warning. It is configured with a custom Action button. Action button has been
            clicked <span id="actionButtonClickCount">{this.state.actionButtonClickCount}</span> times.
          </Alert>
        </Base>
      </div>
    );
  }
}

export default AlertActionButton;
