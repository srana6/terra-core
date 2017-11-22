import React from 'react';
import PropTypes from 'prop-types';
import StatusView from 'terra-status-view';

const propTypes = {
  children: PropTypes.node,
  isAlignedTop: PropTypes.bool,
  isGlyphHidden: PropTypes.bool,
  message: PropTypes.string,
  title: PropTypes.string,
  variant: PropTypes.string,
};

class StatusViewExample extends React.Component {
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

    return (
      <div style={{ border: '1px solid black' }}>
        <StatusView
          isAlignedTop={isAlignedTop}
          isGlyphHidden={isGlyphHidden}
          variant={variant}
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
