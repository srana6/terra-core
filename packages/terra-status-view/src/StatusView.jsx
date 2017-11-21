import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import Divider from 'terra-divider';
import IconFolder from 'terra-icon/lib/icon/IconFolder';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconPadlock from 'terra-icon/lib/icon/IconPadlock';
import IconError from 'terra-icon/lib/icon/IconError';
import styles from './StatusView.scss';

const cx = classNames.bind(styles);

const statusTypes = {
  NODATA: 'nodata',
  NOMATCHINGRESULTS: 'nomatchingresults',
  NOTAUTHORIZED: 'notauthorized',
  ERROR: 'error',
  NOSERVICE: 'noservice',
  UNKNOWN: 'unknown',
};

const propTypes = {
  /**
   * An array of actionable buttons to display.
   */
  children: PropTypes.node,

  /**
   *  Determines if the content should be forced to align at the top of the container.
   */
  forceAlignItemsTop: PropTypes.bool,

  /**
   * Determines if the glyph should be displayed.
   */
  isGlyphHidden: PropTypes.bool,

  /**
   * The descriptive text to display.
   */
  message: PropTypes.string,

  /**
   * The required status title to display.
   */
  title: PropTypes.string.isRequired,

  /**
   * Determines the type of icon to display.
   */
  type: PropTypes.oneOf([statusTypes.NODATA, statusTypes.NOMATCHINGRESULTS, statusTypes.NOTAUTHORIZED, statusTypes.ERROR, statusTypes.NOSERVICE, statusTypes.UNKNOWN]),
};

const defaultProps = {
  children: [],
  forceAlignItemsTop: false,
  isGlyphHidden: false,
  message: undefined,
  title: undefined,
  type: statusTypes.ERROR,
};

class StatusView extends React.Component {

  constructor(props) {
    super(props);
    this.state = { showContainers: [true, true, true, true] };
  }

  componentDidMount() {
    let viewHeight = this.contentNode.offsetHeight - 40;
    let componentsHeight = 0;
    let newState = { showContainers: [true, true, true, true] };

    const components = [this.titleNode, this.buttonsNode, this.messageNode, this.glyphNode];
    for (let i = 0; i < components.length; i += 1) {
      const component = components[i];
      let canDisplayComponent = false;
      if (component) {
        viewHeight -= component.offsetHeight;
        if (viewHeight >= 0) {
          canDisplayComponent = true;
        }
      }

      newState.showContainers[i] = canDisplayComponent;
    }

    this.setState(newState);
  }

  render() {
    const {
    children,
    forceAlignItemsTop,
    isGlyphHidden,
    message,
    title,
    type,
    ...customProps }
    = this.props;

    let glyphSection;
    if (!isGlyphHidden && this.state.showContainers[3]) {
      let icon;
      if (type === statusTypes.NODATA) {
        icon = <IconFolder className={cx('icon')} />;
      } else if (type === statusTypes.NOMATCHINGRESULTS) {
        icon = <IconSearch className={cx('icon')} />;
      } else if (type === statusTypes.NOTAUTHORIZED) {
        icon = <IconPadlock className={cx('icon')} />;
      } else if (type === statusTypes.ERROR) {
        icon = <IconError className={cx('icon')} />;
      } else if (type === statusTypes.NOSERVICE) {
        icon = <IconError className={cx('icon')} />;
      } else {  // type == statusTypes.UNKNOWN
        icon = <IconError className={cx('icon')} />;
      }
      glyphSection = <div className={cx('glyph')} ref={(element) => { this.glyphNode = element; }}>{icon}</div>;
    }

    let messageSection;
    if (message && this.state.showContainers[2]) {
      messageSection = <div className={cx('message')} ref={(element) => { this.messageNode = element; }}>{message}</div>;
    }

    let buttonSection;
    if (children.length && this.state.showContainers[1]) {
      buttonSection = <div className={cx('buttons')} ref={(element) => { this.buttonsNode = element; }}>{children}</div>;
    }

    let titleSection;
    if (this.state.showContainers[0]) {
      titleSection = <div className={cx('title')} ref={(element) => { this.titleNode = element; }}>{title}</div>;
    }

    return (
      <div {...customProps} className={cx('status-view', customProps.className)} ref={(element) => { this.contentNode = element; }}>
        {glyphSection}
        <div className={cx('message-content-group')}>
          {titleSection}
          <Divider className={cx('divider')} />
          {messageSection}
        </div>
        {buttonSection}
      </div>
    );
  }
}

StatusView.propTypes = propTypes;
StatusView.defaultProps = defaultProps;

export default StatusView;
