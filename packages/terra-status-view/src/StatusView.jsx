import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import Button from 'terra-button';
import Divider from 'terra-divider';
import IconFolder from 'terra-icon/lib/icon/IconFolder';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconPadlock from 'terra-icon/lib/icon/IconPadlock';
import IconError from 'terra-icon/lib/icon/IconError';
import styles from './StatusView.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The type of the status to display.
   */
  type: PropTypes.oneOf(['nodata', 'nomatchingresults', 'notauthorized', 'error', 'noservice', 'unknown']),
  /**
   * The status title to display.
   */
  title: PropTypes.string,
  /**
   * The descriptive text to display.
   */
  message: PropTypes.string,
  /**
   * An array of actionable buttons to display.
   */
  buttons: PropTypes.node,
  /**
   * Whether or not the status glyph should be displayed.
   */
  isGlyphHidden: PropTypes.bool,
};

const defaultProps = {
  type: 'unknown',
  title: '',
  message: '',
  buttons: [],
  isGlyphHidden: false,
};

const StatusView = ({
    type,
    title,
    message,
    buttons,
    isGlyphHidden,
    ...customProps
  }) => {

  let glyphSection;
  if (!isGlyphHidden) {
    let icon;
    if (type === 'nodata') {
      icon = <IconFolder height='100px' width='100px' />;
    } else if (type === 'nomatchingresults') {
      icon = <IconSearch height='100px' width='100px' />;
    } else if (type === 'notauthorized') {
      icon = <IconPadlock height='100px' width='100px' />;
    } else if (type === 'error') {
      icon = <IconError height='100px' width='100px' />;
    } else if (type === 'noservice') {
      icon = <IconError height='100px' width='100px' />;
    } else {
      icon = <IconError height='100px' width='100px' />;
    }
    glyphSection = <div className={cx('glyph')}>{icon}</div>;
  }

  let titleSection;
  if (title) {
    titleSection = <div className={cx('title')}>{title}</div>;
  }

  let messageSection;
  if (message) {
    messageSection = <div className={cx('message')}>{message}</div>;
  }

  let buttonSection;
  if (buttons.length) {
    buttonSection = <div className={cx('buttons')}>{buttons}</div>;
  }

  return (
    <div {...customProps} className={cx('status-view', customProps.className)}>
      <div className={cx('status-content-group')}>
        {glyphSection}
        <div className={cx('message-content-group')}>
          {titleSection}
          <Divider className={cx('divider')} />
          {messageSection}
        </div>
        {buttonSection}
      </div>
    </div>
  );
};

StatusView.propTypes = propTypes;
StatusView.defaultProps = defaultProps;

export default StatusView;
