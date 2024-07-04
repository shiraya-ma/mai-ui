// Info
'use strict';
import React, { HTMLAttributes } from 'react';

import { margeClassNames } from '../../libs';

const Info: React.FC<Info.Props> = (props) => {
    const { children, className, publishedAt, updatedAt, ...divProps } = props;
    
    return (
        <div
        { ...divProps }
        className={ margeClassNames([
            'flex flex-col',
            className
        ]) }
        >
            <p className='flex gap-2'>
                <span className='text-chocolate-700/70'>公開日: </span>
                <span className='text-chocolate-700'>{ publishedAt }</span>
            </p>

            <p className='flex gap-2'>
                <span className='text-chocolate-600/70'>更新日: </span>
                <span className='text-chocolate-700'>{ updatedAt }</span>
            </p>
        </div>
    );
};

namespace Info {
    export type Props = HTMLAttributes<HTMLDivElement> & {
        publishedAt?: string;
        updatedAt?: string;
    };
};

export {
    Info
};
