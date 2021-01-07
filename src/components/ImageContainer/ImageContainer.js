import React, { useState, useEffect, useRef } from 'react';
// import useResizeAware from 'react-resize-aware';

import classes from './ImageContainer.module.scss';

const ImageContainer = props => {
  const [style, setStyle] = useState(null);
  const imgRef = useRef();

  useEffect(() => {
    console.log('triggered');
    switch (props.setheightorwidth) {
      case 'width':
        setStyle({
          height: `${imgRef.current.clientWidth}px`,
        });
        break;

      case 'height':
        setStyle({
          width: `${imgRef.current.clientHeight}px`,
        });
        break;

      default:
        setStyle(null);
    }
  }, [props.setheightorwidth]);

  return (
    <div className={classes.ImageContainer} ref={imgRef} style={style}>
      <img {...props} alt={props.alt} />
    </div>
  );
};

export default ImageContainer;
