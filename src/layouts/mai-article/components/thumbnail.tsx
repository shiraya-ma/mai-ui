'use strict';
import React from 'react';
import { cn } from '@heroui/theme';
import { Image, type ImageProps } from '@heroui/image';

const MaiArticleThumbnail: React.FC<MaiArticleThumbnail.Props> = (props) => {
  const {
    alt,
    className: userClassName,
    ...imageProps
  } = props;
  
  return (
    <Image
      className={cn(
        'w-full max-w-full max-h-[60dvh] h-auto object-contain aspect-[1200/630]',
        userClassName,
      )}
      alt={alt ?? 'thumbnail'}
      width={1200}
      height={630}
      {...imageProps}
      data-slot='thumbnail'
    />
  );
};

namespace MaiArticleThumbnail {
  export type Props = Omit<ImageProps, 'width' | 'height'> & {
    priority?: boolean;
  };
};

export {
  MaiArticleThumbnail
};
