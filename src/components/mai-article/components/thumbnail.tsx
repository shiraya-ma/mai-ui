// Thumbnail
'use strict';
import React from 'react';
import { Image, ImageProps } from '@nextui-org/react';

import { classNames } from '../../../libs';

const Thumbnail: React.FC<Thumbnail.Props> = (props) => {
    const {
        alt,
        className,
        height,
        width,
        ...imageProps
    } = props;
    
    return (
        <Image
        className={classNames(
            'w-full max-w-full h-auto object-contain aspect-[1200/630]',
            className
        )}
        alt={ alt ?? 'サムネイル' }
        width={ 1200 }
        height={ 630 }
        { ...imageProps }
        />
    );
};

namespace Thumbnail {
    export type Props = ImageProps & {
        priority?: boolean;
    };
};

export {
    Thumbnail
};
