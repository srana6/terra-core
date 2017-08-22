import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Modal from 'terra-modal';
import Button from 'terra-button';
import styles from './_TimeClarification.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * If set to true, the modal will rendered as opened
   */
  isOpen: PropTypes.bool.isRequired,
  /**
   * If set to true, the button to open the modal will be hidden.
   */
  isOffsetButtonHidden: PropTypes.bool.isRequired,
  /**
   * Callback function indicating the before time change option was selected.
   */
  onDaylightSavingButtonClick: PropTypes.func.isRequired,
  /**
   * Callback function indicating the after time change option was selected.
   */
  onStandardTimeButtonClick: PropTypes.func.isRequired,
  /**
   * The daylight savings label to display on the button
   */
  daylightSavingLabel: PropTypes.string.isRequired,
  /**
   * Callback function indicating the after time change option was selected.
   */
  standardTimeLabel: PropTypes.string.isRequired,

};

const defaultProps = {
  isOpen: false,
  isOffsetButtonHidden: false,
  onDaylightSavingButtonClick: undefined,
  onStandardTimeButtonClick: undefined,
  daylightSavingLabel: null,
  standardTimeLabel: null,
};

const contextTypes = {
  /* eslint-disable consistent-return */
  intl: (context) => {
    if (context.intl === undefined) {
      return new Error('Please add locale prop to Base component to load translations');
    }
  },
};

class TimeClarification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.isOpen,
      offsetDisplay: '',
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleDaylightSavingButtonClick = this.handleDaylightSavingButtonClick.bind(this);
    this.handleStandardTimeButtonClick = this.handleStandardTimeButtonClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps === this.props) {
      return;
    }

    this.setState({
      isOpen: nextProps.isOpen,
    });
  }

  handleOpenModal() {
    this.setState({ isOpen: true });
  }

  handleCloseModal() {
    this.setState({ isOpen: false });
  }

  handleDaylightSavingButtonClick(event) {
    this.handleCloseModal();

    this.setState({ offsetDisplay: this.props.daylightSavingLabel });

    if (this.props.onDaylightSavingButtonClick) {
      this.props.onDaylightSavingButtonClick(event);
    }
  }

  handleStandardTimeButtonClick(event) {
    this.handleCloseModal();

    this.setState({ offsetDisplay: this.props.standardTimeLabel });

    if (this.props.onStandardTimeButtonClick) {
      this.props.onStandardTimeButtonClick(event);
    }
  }

  render() {
    if (this.props.isOffsetButtonHidden) {
      this.state.offsetDisplay = '';
    }

    const offsetButtonClassNames = cx([
      'offset-button',
      // { 'offset-button-hidden': this.props.isOffsetButtonHidden },
      { 'offset-button-hidden': this.props.isOffsetButtonHidden || !this.state.offsetDisplay },
    ]);

    const timeClarificationButtons = cx([
      'time-clarification-buttons',
    ]);

    const intl = this.context.intl;
    const title = intl.formatMessage({ id: 'Terra.dateTimePicker.timeClarification.title' });
    const message = intl.formatMessage({ id: 'Terra.dateTimePicker.timeClarification.message' });
    const daylightSavingButtonLabel = intl.formatMessage({ id: 'Terra.dateTimePicker.timeClarification.button.daylightSaving' });
    const standardTimeButtonLabel = intl.formatMessage({ id: 'Terra.dateTimePicker.timeClarification.button.standardTime' });

    return (
      <div>
        <Modal
          ariaLabel="Time Clarification"
          isOpen={this.state.isOpen}
          onRequestClose={this.handleCloseModal}
          closeOnEsc={false}
          closeOnOutsideClick={false}
        >
          <div>
            <header className={cx('time-clarification-header')}>
              {<h1 className={cx(['time-clarification-title'])}>{title}</h1>}
            </header>
            <br />
            <div className={cx(['time-clarification-body'])}>
              <p>{message}</p>
            </div>
            <br />
            <br />
            <div className={timeClarificationButtons}>
              <Button
                onClick={this.handleDaylightSavingButtonClick}
                variant="primary"
                className={cx(['time-clarification-button'])}
              >
                {daylightSavingButtonLabel}
              </Button>
              <Button
                onClick={this.handleStandardTimeButtonClick}
                variant="primary"
                className={cx(['time-clarification-button'])}
              >
                {standardTimeButtonLabel}
              </Button>
            </div>
            <br />
            <br />
          </div>
        </Modal>
        <Button
          className={offsetButtonClassNames}
          onClick={this.handleOpenModal}
          type="button"
          text={this.state.offsetDisplay}
          isCompact
        />
      </div>
    );
  }
}

TimeClarification.propTypes = propTypes;
TimeClarification.defaultProps = defaultProps;
TimeClarification.contextTypes = contextTypes;

export default TimeClarification;