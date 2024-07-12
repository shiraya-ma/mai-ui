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
        id,
        withText,
        ...aProps
    } = props;

    return (
        <MaiSNSLinkOuter
        { ...aProps }
        color={ color }
        href={`https://www.pixiv.net/${ id? `users/${ id }`: '' }`}
        sns='pixiv'
        withText={ withText }
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width='1rem'
            height='1rem'
            fill='currentColor'
            >
                <path
                d='M14,2.5c-1.2-1.1-3-1.8-5.1-1.8C3.7.8,0,4.9,0,4.9l1,1.6s.5,0,
                   .2-.9c.2-.5.8-1.2,1.8-1.9v10.8c-.5.1-1,.4-.6.8h3c.4-.4-.2-.6-.6-.8v-2.6s2,
                   .8,4.2.8,3.6-.6,4.9-1.6c1.3-1,2.1-2.6,2.1-4.3s-.8-3.2-2-4.3h0ZM12.4,
                   10.3c-.9.9-2.2,1.4-3.7,1.4s-3.1-.4-4-.8V2.8c1-.7,2.7-1.1,
                   4-1.1s2.9.6,3.8,1.6c.9.9,1.4,2.2,1.4,3.6s-.5,2.5-1.4,3.5h0Z'
                />
            </svg>

            { withText && (
                <span>pixiv</span>
            )}
        </MaiSNSLinkOuter>
    );
};

namespace Pixiv {
    export type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
        /**
         * pixivのID
         */
        id?: string;

        withText?: boolean;
    };
};

export {
    Pixiv
};
