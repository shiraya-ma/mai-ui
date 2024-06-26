// Instagram
'use strict';
import React from 'react';
import { Instagram as InstagramIcon } from 'react-bootstrap-icons';

import { MaiSNSLinkOuter } from './mai-sns-link-outer';

const Instagram: React.FC<Instagram.Props> = (props) => {
    const {
        color,
        id
    } = props;

    return (
        <MaiSNSLinkOuter
        color={ color }
        href={`https://www.instagram.com/${ id ?? '' }`}
        sns='Instagram'     
        >
            <InstagramIcon />
        </MaiSNSLinkOuter>
    );
    
    // return (
    //     <MaiSNSLinkPresenter
    //     { ...anchorProps }
    //     href={`https://www.instagram.com/${ id ?? '' }`}
    //     sns='Instagram'
    //     >
    //         <InstagramIcon />
    //     </MaiSNSLinkPresenter>
    // );
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
