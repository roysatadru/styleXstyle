import React, { useState, useEffect } from 'react';
import useResizeAware from 'react-resize-aware';

import classes from './ImageContainer.module.scss';

const ImageContainer = props => {
  const [style, setStyle] = useState(null);
  const [resizeListener, sizes] = useResizeAware();

  const classList = [classes.ImageContainer];

  useEffect(() => {
    switch (props.setheightorwidth) {
      case 'width':
        setStyle({
          height: `${sizes.width}px`,
        });
        break;

      case 'height':
        setStyle({
          width: `${sizes.height}px`,
        });
        break;

      default:
        setStyle(null);
    }
  }, [props.setheightorwidth, sizes.width, sizes.height]);

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
