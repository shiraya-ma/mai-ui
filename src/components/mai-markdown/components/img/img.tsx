'use strict';
/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import { Image } from '@heroui/image';

import { useImg, type ImageProps } from './_internal';

const Img: React.FC<ImageProps> = (props) => {
  const {
    fallbackSrc,
    fallbackSize,
    isError,
    handleError,
    ...imgProps
  } = useImg(props);

  return (
    <Image
      fallbackSrc={fallbackSrc}
      onError={handleError as any /* eslint-disable-line @typescript-eslint/no-explicit-any */ }
      {...imgProps as ImageProps}
      style={{
        width: fallbackSize?.width,
        height: fallbackSize?.height,
      }}
      data-error={isError}
      data-fallback-width={fallbackSize?.width}
      data-fallback-height={fallbackSize?.height}
    />
  );
};

export {
  Img as img,
};
