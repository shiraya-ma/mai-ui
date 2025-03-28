// Img
'use strict';
import React from 'react';
// import { Image } from '@nextui-org/react';

const Img = (props: Img.Props) => {
    const {} = props;    
    
    // return (
    //     <Image
    //     { ...props }
    //     radius='sm'
    //     isZoomed
    //     />
    // );

    return <></>
};

namespace Img {
    export type Props = {
        src?: string;
        srcSet?: string;
        sizes?: string;
        alt?: string;
    };
};

export {
    Img
};
