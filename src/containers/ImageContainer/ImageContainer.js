import React, { useState, useEffect } from 'react';
import useResizeAware from 'react-resize-aware';

import classes from './ImageContainer.module.scss';

const ImageContainer = props => {
  const [style, setStyle] = useState(null);
  const [resizeListener, sizes] = useResizeAware();

  const classList = [classes.ImageContainer];

  useEffect(() => {
    if (props.setwidth) {
      setStyle({
        height: `${sizes.width}px`,
      });
    } else {
      setStyle(null);
    }
  }, [props.setwidth, sizes.width]);

  if (props.position === 'top') {
    classList.push(classes.positionTop);
  }

  return (
    <div className={classList.join(' ')} style={{ position: 'relative', ...style }}>
      {resizeListener}
      <img {...props} alt={props.alt} />
    </div>
  );
};

export default ImageContainer;
