// Instagram
'use strict';
import React from 'react';
import { Instagram as InstagramIcon } from 'react-bootstrap-icons';

import { MaiSNSLinkOuter } from './mai-sns-link-outer';

/**
 * Instagramリンクのコンポーネント
 * 
 * @param props 
 * @returns 
 * @example
 * 'use strict'
 * import { MaiInstagramLink } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *      return (
 *          <p>
 *              <MaiInstagramLink id="example"/>
 *          </p>
 *      );
 * };
 */
const Instagram: React.FC<Instagram.Props> = (props) => {
    const {
        color,
        id,
        ...aProps
    } = props;

    return (
        <MaiSNSLinkOuter
        { ...aProps }
        color={ color }
        href={`https://www.instagram.com/${ id ?? '' }`}
        sns='Instagram'     
        >
            <InstagramIcon />
        </MaiSNSLinkOuter>
    );
};

namespace Instagram {
    export type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
        /**
         * InstagramのID
         */
        id?: string;
    };
};

export {
    Instagram
};
