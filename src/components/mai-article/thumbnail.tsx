// Thumbnail
'use strict';
import React, { ReactNode } from 'react';

const Thumbnail: React.FC<Thumbnail.Props> = (props) => {
    const { children } = props;
    
    return (
        <>
            { children }
        </>
    );
};

namespace Thumbnail {
    export type Props = {
        children?: ReactNode;
    };
};

export {
    Thumbnail
};
