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
    this.state = {
      showTitle: true,
      showButtons: true,
      showMessage: true,
      showGlyph: true,
      paddingTop: 20,
      paddingBottom: 20,
    };
    this.determineContainersToShowForHeight = this.determineContainersToShowForHeight.bind(this);
  }

  componentDidMount() {
    const viewHeight = this.contentNode.offsetHeight - 40;
    this.determineContainersToShowForHeight(viewHeight);
  }

  determineContainersToShowForHeight(height) {
    let viewHeight = height;
    const components = [this.titleNode, this.buttonsNode, this.messageNode, this.glyphNode];
    const showComponents = [false, false, false, false];
    let additionalTopPadding = 0;
    let additionBottomPadding = 0;
    for (let i = 0; i < components.length; i += 1) {
      const component = components[i];
      if (component && viewHeight > 0) {
        viewHeight -= component.offsetHeight;
        if (viewHeight >= 0) {
          showComponents[i] = true;
          if (!this.props.isAlignedTop) {
            additionalTopPadding = viewHeight * 0.4;
            additionBottomPadding = viewHeight * 0.6;
          }
        }
      }
    }

    this.setState({
      showTitle: showComponents[0],
      showButtons: showComponents[1],
      showMessage: showComponents[2],
      showGlyph: showComponents[3],
      paddingTop: 20 + additionalTopPadding,
      paddingBottom: 20 + additionBottomPadding,
    });
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
    if (!isGlyphHidden && this.state.showGlyph) {
      const defaultIcon = StatusView.defaultIcon(variant);
      glyphSection = <div className={cx('glyph')} ref={(element) => { this.glyphNode = element; }}>{defaultIcon}</div>;
    }

    let messageSection;
    if (message && this.state.showMessage) {
      messageSection = <div className={cx('message')} ref={(element) => { this.messageNode = element; }}>{message}</div>;
    }

    let buttonSection;
    if (children.length && this.state.showButtons) {
      buttonSection = <div className={cx('buttons')} ref={(element) => { this.buttonsNode = element; }}>{children}</div>;
    }

    let titleSection;
    if (this.state.showTitle) {
      let defaultTitle = title;
      if (!defaultTitle) {
        defaultTitle = StatusView.defaultTitle(variant);
      }
      titleSection = <div className={cx('title')} ref={(element) => { this.titleNode = element; }}>{defaultTitle}</div>;
    }

    const statusViewClassNames = cx([
      'status-view',
      customProps.className,
    ]);

    const outerDivStyles = {
      paddingTop: `${this.state.paddingTop}px`,
      paddingBottom: `${this.state.paddingBottom}px`,
    };

    return (
      <div
        {...customProps}
        className={statusViewClassNames}
        style={{ ...outerDivStyles, ...customProps.style }}
        ref={(element) => { this.contentNode = element; }}
      >
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
