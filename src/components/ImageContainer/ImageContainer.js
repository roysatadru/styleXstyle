import React, { useState, useEffect } from 'react';
import useResizeAware from 'react-resize-aware';

import classes from './ImageContainer.module.scss';

const ImageContainer = props => {
  const [style, setStyle] = useState(null);
  const [resizeListener, sizes] = useResizeAware();

  useEffect(() => {
    console.log('triggered');
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

  return (
    <div className={classes.ImageContainer} style={{ position: 'relative', ...style }}>
      {resizeListener}
      <img {...props} alt={props.alt} />
    </div>
  );
};

export default ImageContainer;
