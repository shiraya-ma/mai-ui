// Twitter
'use strict';
import React from 'react';
import { Twitter as TwitterIcon, TwitterX as TwitterXIcon } from 'react-bootstrap-icons';

import { MaiSNSLinkOuter } from './mai-sns-link-outer';

const Twitter: React.FC<Twitter.Props> = (props) => {
    const {
        color,
        id,
        isX
    } = props;

    return (
        <MaiSNSLinkOuter
        color={ color }
        href={`https://x.com/${ id.replace(/@/g, '')}`}
        sns='Twitter'        
        >
            { isX? <TwitterXIcon />: <TwitterIcon /> }
        </MaiSNSLinkOuter>
    );
    
    // return (
    //     <MaiSNSLinkPresenter
    //     { ...anchorProps }
    //     href={`https://x.com/${ id.replace(/@/g, '')}`}
    //     sns='Twitter'
    //     >
    //         { isX? <TwitterXIcon />: <TwitterIcon /> }
    //     </MaiSNSLinkPresenter>
    // );
};

namespace Twitter {
    export type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
        /**
         * TwitterのID
         * 
         * \@マークはあってもなくてもいい
         * 
         * @default 'elonmusk'
         */
        id: string;

        /**
         * Xのアイコンを使用するか
         */
        isX?: boolean;
    };
};

export {
    Twitter
};
