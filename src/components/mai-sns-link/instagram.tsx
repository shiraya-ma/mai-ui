// Instagram
'use strict';
import React from 'react';
import { Instagram as InstagramIcon } from 'react-bootstrap-icons';

import { MaiSNSLinkPresenter } from './mai-sns-link-presenter';

const Instagram: React.FC<Instagram.Props> = (props) => {
    const {
        id,
        ...anchorProps
    } = props;
    
    return (
        <MaiSNSLinkPresenter
        { ...anchorProps }
        href={`https://www.instagram.com/${ id ?? '' }`}
        sns='Instagram'
        >
            <InstagramIcon />
        </MaiSNSLinkPresenter>
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
