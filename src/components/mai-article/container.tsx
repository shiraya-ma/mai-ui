// Container
'use strict';
import React, { HTMLAttributes } from 'react';

import { margeClassNames } from '../../libs';

const Container: React.FC<Container.Props> = (props) => {
    const { children, className, ...articleProps } = props;
    
    return (
        <article
        className={ margeClassNames([
            'flex flex-col gap-4 px-4 py-12',
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
