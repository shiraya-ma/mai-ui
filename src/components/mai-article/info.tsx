// Info
'use strict';
import React, { HTMLAttributes } from 'react';

import { margeClassNames } from '../../libs';
import { getInfoProps } from './helpers';

const Info: React.FC<Info.Props> = (props) => {
    const { children, className, publishedAt, updatedAt, ...divProps } = props;

    const { data } = getInfoProps({ publishedAt, updatedAt });
    
    return (
        <div
        { ...divProps }
        className={ margeClassNames([
            'flex flex-col',
            className
        ]) }
        >
            { data.map((data) => (
                <p className='flex gap-2' key={`data-info-${ data.label }`}>
                    <span className='text-chocolate-700/70'>{ data.label }</span>
                    <span className='text-chocolate-700'>{ data.date }</span>
                </p>
            ))}
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
