// Pixiv
'use strict';
import React from 'react';

import { MaiSNSLinkOuter } from './mai-sns-link-outer';

/**
 * pixivリンクのコンポーネント
 * 
 * @param props 
 * @returns 
 * @example
 * 'use strict'
 * import { MaiPixivLink } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *      return (
 *          <p>
 *              <MaiPixivLink id="example"/>
 *          </p>
 *      );
 * };
 */
const Pixiv: React.FC<Pixiv.Props> = (props) => {
    const {
        color,
        id
    } = props;

    return (
        <MaiSNSLinkOuter
        color={ color }
        href={`https://www.pixiv.net/${ id?`$users/${ id }`: '' }`}
        sns='pixiv'
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width='1rem'
            height='1rem'
            fill='currentColor'
            >
                <path
                d={`M28,5c-2.5-2.2-6-3.5-10.1-3.5C7.3,1.5,0,9.8,0,9.8
                L2,13c0,0,1.1,0.1,0.5-1.8c0.5-1,1.5-2.3,3.5-3.8V29c-0.9,0.2-2,0.7-1.2,1.5h5.9c0.8-0.8-0.5-1.2-1.2-1.5v-5.1c0,0,4,1.6,8.4,1.6
                c3.8,0,7.3-1.1,9.9-3.2c2.6-2,4.2-5.1,4.2-8.6C32,10.3,30.5,7.2,28,5L28,5z M24.9,20.6c-1.8,1.8-4.4,2.9-7.4,2.9
                c-3.3,0-6.1-0.7-8-1.6V5.7c2-1.4,5.3-2.3,8-2.3c3.2,0,5.8,1.2,7.5,3.1c1.7,1.9,2.7,4.4,2.7,7.2C27.7,16.5,26.7,18.8,24.9,20.6
                L24.9,20.6z`.replace(/\s+/g, '').replace(/,/g, ' ')}
                />
            </svg>
        </MaiSNSLinkOuter>
    );
};

namespace Pixiv {
    export type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
        /**
         * pixivのID
         */
        id?: string;
    };
};

export {
    Pixiv
};
