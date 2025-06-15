'use strict';
import React, { HTMLAttributes, useRef } from 'react';
import { Image } from '@heroui/image';

const Img: React.FC<HTMLAttributes<HTMLImageElement>> = (props) => {
  const {
    node: _,    // eslint-disable-line @typescript-eslint/no-unused-vars
    ...imgProps
  } = props as Partial<{
    node: undefined;
  }>;

  const imageRef = useRef<HTMLImageElement>(null);

  return (
    <Image
      fallbackSrc='/image-placeholder.png'
      {...imgProps}
      isZoomed
      removeWrapper
      ref={imageRef}
      onError={() => imageRef.current?.setAttribute('src', '/image-placeholder.png')}
    />
  );
};

export {
  Img as img,
};
