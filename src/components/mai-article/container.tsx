// Container
'use strict';
import React, { HTMLAttributes } from 'react';

import { margeClassNames } from '../../libs';

const Container: React.FC<Container.Props> = (props) => {
    const { children, className, ...articleProps } = props;
    
    return (
        <article
        className={ margeClassNames([
            'flex flex-col gap-4 bg-white px-4 py-12 lg:bg-gray-900 lg:rounded-md lg:shadow-medium',
            className
        ]) }
        { ...articleProps }
        >
            { children }
        </article>
    );
};

namespace Container {
    export type Props = HTMLAttributes<HTMLElement> & {};
};

export {
    Container
};
