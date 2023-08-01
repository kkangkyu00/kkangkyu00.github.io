import React, { ForwardedRef, forwardRef } from 'react';

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>;
const Image = ({ style, onLoad, alt, ...props }: ImageProps, ref: ForwardedRef<HTMLImageElement>) => {
  const handleOnLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    onLoad?.(e);
  };
  return <img ref={ref} style={style} onLoad={handleOnLoad} {...props} alt={alt || ''} />;
};

export default forwardRef<HTMLImageElement, ImageProps>(Image);
