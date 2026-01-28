import React from 'react';
import PropTypes from 'prop-types';

/**
 * GeometricShape Component
 * Creates decorative geometric shapes with customizable properties
 */
const GeometricShape = ({ 
  type = 'circle', 
  color = 'green', 
  size = 200, 
  top, 
  right, 
  bottom, 
  left,
  outline = false,
  className = ''
}) => {
  const shapeClass = `shape-${type}`;
  const colorClass = outline ? `shape-${color}-outline` : `shape-${color}`;
  
  const style = {
    width: `${size}px`,
    height: `${size}px`,
    top: top !== undefined ? top : 'auto',
    right: right !== undefined ? right : 'auto',
    bottom: bottom !== undefined ? bottom : 'auto',
    left: left !== undefined ? left : 'auto',
  };

  return (
    <div 
      className={`geometric-shape ${shapeClass} ${colorClass} ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
};

GeometricShape.propTypes = {
  type: PropTypes.oneOf(['circle', 'rectangle', 'triangle']),
  color: PropTypes.oneOf(['green', 'violet']),
  size: PropTypes.number,
  top: PropTypes.string,
  right: PropTypes.string,
  bottom: PropTypes.string,
  left: PropTypes.string,
  outline: PropTypes.bool,
  className: PropTypes.string
};

export default GeometricShape;
