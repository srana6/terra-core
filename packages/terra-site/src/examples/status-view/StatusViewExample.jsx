import React from 'react';
import PropTypes from 'prop-types';
import StatusView from 'terra-status-view';

const propTypes = {
  children: PropTypes.node,
  forceAlignItemsTop: PropTypes.bool,
  isGlyphHidden: PropTypes.bool,
  message: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
};

class StatusViewExample extends React.Component {
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

    return (
      <div style={{ border: '1px solid black' }}>
        <StatusView
          forceAlignItemsTop={forceAlignItemsTop}
          isGlyphHidden={isGlyphHidden}
          type={type}
          title={title}
          message={message}
        >
          {children}
        </StatusView>
      </div>
    );
  }
}

StatusViewExample.propTypes = propTypes;
export default StatusViewExample;
