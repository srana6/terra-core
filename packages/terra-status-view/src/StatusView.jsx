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

const variants = {
  NODATA: 'no-data',
  NOMATCHINGRESULTS: 'no-matching-results',
  NOTAUTHORIZED: 'not-authorized',
  ERROR: 'error',
  NOSERVICE: 'no-service',
  UNKNOWN: 'unknown',
};

const propTypes = {
  /**
   * An array of actionable buttons to display.
   */
  children: PropTypes.node,

  /**
   *  Determines if the content should be aligned vertically at the top of the container rather than in the middle.
   */
  isAlignedTop: PropTypes.bool,

  /**
   * Determines if the glyph should be displayed.
   */
  isGlyphHidden: PropTypes.bool,

  /**
   * The descriptive text to display.
   */
  message: PropTypes.string,

  /**
   * The required status title to display. Status views with variants of type no-data, no-matching-results,
   * not-authorized, and error will have defaulted values unless overridden with this prop.
   */
  title: PropTypes.string,

  /**
   * Determines the type of icon to display.
   */
  variant: PropTypes.oneOf([
    variants.NODATA,
    variants.NOMATCHINGRESULTS,
    variants.NOTAUTHORIZED,
    variants.ERROR,
    variants.NOSERVICE,
    variants.UNKNOWN,
  ]),
};

const defaultProps = {
  children: [],
  isAlignedTop: false,
  isGlyphHidden: false,
  message: undefined,
  title: undefined,
  variant: variants.ERROR,
};

class StatusView extends React.Component {

  static defaultTitle(variant) {
    let title = '';
    if (variant === variants.NODATA) {
      title = 'No Results';
    } else if (variant === variants.NOMATCHINGRESULTS) {
      title = 'No Matching Results';
    } else if (variant === variants.NOTAUTHORIZED) {
      title = 'Not Authorized';
    } else if (variant === variants.ERROR) {
      title = 'Error';
    }
    return title;
  }

  static defaultIcon(variant) {
    let icon;
    if (variant === variants.NODATA) {
      icon = <IconFolder className={cx('icon')} />;
    } else if (variant === variants.NOMATCHINGRESULTS) {
      icon = <IconSearch className={cx('icon')} />;
    } else if (variant === variants.NOTAUTHORIZED) {
      icon = <IconPadlock className={cx('icon')} />;
    } else if (variant === variants.ERROR) {
      icon = <IconError className={cx('icon')} />;
    } else if (variant === variants.NOSERVICE) {
      icon = <IconError className={cx('icon')} />;
    } else {  // variant == variants.UNKNOWN
      icon = <IconError className={cx('icon')} />;
    }
    return icon;
  }

  constructor(props) {
    super(props);
    this.state = { showContainers: [true, true, true, true] };
  }

  componentDidMount() {
    let viewHeight = this.contentNode.offsetHeight - 40;
    const newState = { showContainers: [true, true, true, true] };

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
    isAlignedTop,
    isGlyphHidden,
    message,
    title,
    variant,
    ...customProps }
    = this.props;

    let glyphSection;
    if (!isGlyphHidden && this.state.showContainers[3]) {
      const defaultIcon = StatusView.defaultIcon(variant);
      glyphSection = <div className={cx('glyph')} ref={(element) => { this.glyphNode = element; }}>{defaultIcon}</div>;
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
      let defaultTitle = title;
      if (!defaultTitle || !defaultTitle.length) {
        defaultTitle = StatusView.defaultTitle(variant);
      }
      titleSection = <div className={cx('title')} ref={(element) => { this.titleNode = element; }}>{defaultTitle}</div>;
    }

    const alignClass = (isAlignedTop) ? 'align-top' : 'align-center';
    const statusViewClassNames = cx([
      'status-view',
      alignClass,
      customProps.className,
    ]);

    return (
      <div {...customProps} className={statusViewClassNames} ref={(element) => { this.contentNode = element; }}>
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
StatusView.variants = variants;
export default StatusView;
