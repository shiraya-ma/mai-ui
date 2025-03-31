// Container
'use strict';
import React, { type HTMLAttributes } from 'react';

import { classNames } from '../../../libs';

const Container: React.FC<Container.Props> = (props) => {
    const { children, className, ...articleProps } = props;
    
    return (
        <article
        className={ classNames(
            'flex flex-col gap-4 px-4 py-12 lg:bg-white lg:dark:bg-gray-800 lg:rounded-md lg:shadow-medium',
            className
        ) }
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
