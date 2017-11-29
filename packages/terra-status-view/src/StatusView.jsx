import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import Divider from 'terra-divider';
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
    } else if (variant === variants.NOSERVICE) {
      title = 'Not Connected';
    } else { // (variant === variants.UNKNOWN)
      title = 'Error';
    }
    return title;
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
    this.determineContainersToShowForHeight(this.contentNode.offsetHeight);
  }

  determineContainersToShowForHeight(height) {
    // the status view has a minimum 20px top and bottom padding,
    // need to subtract to determine if will components will fit in remaining space
    let viewHeight = height - 40;
    let additionalTopPadding = 0;
    let additionBottomPadding = 0;
    const components = [this.titleNode, this.buttonsNode, this.messageNode, this.glyphNode];
    const showComponents = [false, false, false, false];

    for (let i = 0; i < components.length; i += 1) {
      const component = components[i];
      if (component && viewHeight > 0) {
        viewHeight -= component.offsetHeight;
        if (viewHeight >= 0) {
          showComponents[i] = true;
          if (!this.props.isAlignedTop) {
            // calculate the remaining padding to be added for when the most amount
            // of the components can fit into the view
            additionalTopPadding = viewHeight * 0.4;
            additionBottomPadding = viewHeight * 0.6;
          }
        }
      }
    }

    // set which components can fit into the view and add the additional 20px
    // top and bottom padding to the remaining additional padding leftover
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
      glyphSection = <div className={cx('glyph')} ref={(element) => { this.glyphNode = element; }}><svg className={cx(variant)} /></div>;
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

    const statusViewStyles = {
      paddingTop: `${this.state.paddingTop}px`,
      paddingBottom: `${this.state.paddingBottom}px`,
    };

    return (
      <div
        {...customProps}
        className={statusViewClassNames}
        style={{ ...statusViewStyles, ...customProps.style }}
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
